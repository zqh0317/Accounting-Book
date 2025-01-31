import { NavBar, DatePicker, ConfigProvider } from 'antd-mobile'
import './index.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import _ from 'lodash'
import MonthlyBill from './components/MonthlyBill'
import enUS from 'antd-mobile/es/locales/en-US'

const Year = () => {
    //Group data by year
    const billList = useSelector(state => state.bill.billList)
    const yearGroup = useMemo(()=>{
        return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY'))
    },[billList])

    //Control the opening and closing of time picker
    const [yearVisible, setYearVisible] = useState(false)

    //Control time display
    const [currentYear, setCurrentYear] = useState(()=>{
        return dayjs(new Date()).format('YYYY')
    })
    //Calculate the payment, income and balance for years
    const [currentYearList, setCurrentYearList] = useState([])
    const yearResult = useMemo(() => {
      if (!currentYearList || currentYearList.length === 0) {
          return {
              pay: 0,
              income: 0,
              total: 0
          }
      }
  
      const pay = currentYearList
          .filter(item => item.type === 'pay')
          .reduce((a, c) => a + c.money, 0)
      const income = currentYearList
          .filter(item => item.type === 'income')
          .reduce((a, c) => a + c.money, 0)
  
      return {
          pay,
          income,
          total: pay + income
      }
  }, [currentYearList])

    //Display the current year’s data upon initialization
    useEffect(() => {
        const nowYear = dayjs().format('YYYY')
        if (yearGroup[nowYear]){
            setCurrentYearList(yearGroup[nowYear])
        }
    },[yearGroup])
        
    //Retrieve the data for the selected year when the confirm button of the time picker is clicked
    const onConfirm = (date)=>{
        setYearVisible(false)
        const formatYear = dayjs(date).format('YYYY')
        setCurrentYear(formatYear)
        setCurrentYearList(yearGroup[formatYear])
    }

    //Group data by month
    const monthGroup = useMemo(() => {
        const groupData = _.groupBy(currentYearList, (item) => dayjs(item.date).format('YYYY-MM'))
        const keys = Object.keys(groupData)
        return {
            groupData,
            keys
        }
    },[currentYearList])

    

    return (
    <div className="yearlyBill">
      <NavBar className="nav" backIcon={false}>
        YEARLY BILL
      </NavBar>
      <div className="content">
        <div className="header">
          {/* time switch area */}
          <div className="date" onClick={() => setYearVisible(true)}>
            <span className="text">
            {currentYear + ''} 
            </span>
            {/* Control the direction of the arrow */}
            <span className= {classNames('arrow', yearVisible && 'expand')}></span>
          </div>
          {/* Yearly bill’s payment, income, and balance data */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{yearResult.pay.toFixed(2)}</span>
              <span className="type">payment</span>
            </div>
            <div className="item">
              <span className="money">{yearResult.income.toFixed(2)}</span>
              <span className="type">income</span>
            </div>
            <div className="item">
              <span className="money">{yearResult.total.toFixed(2)}</span>
              <span className="type">balance</span>
            </div>
          </div>
          {/* time picker component from antD */}
          <ConfigProvider locale={enUS}>
          <DatePicker
            className="kaDate"
            title="Accounting Date"
            precision="year"
            visible={yearVisible}
            max={new Date()}
            onCancel={()=>setYearVisible(false)}
            onConfirm={onConfirm}
            //Close on overlay click
            onClose={()=>setYearVisible(false)}
          />
          </ConfigProvider>
        </div>
        {/* Render the monthly bill component */}
        {
        monthGroup.keys.map(key => {
                return <MonthlyBill key={key} date={key} billList={monthGroup.groupData[key]} />
            })
        }
        
      </div>
    </div >
  )
}

export default Year