import { NavBar, DatePicker, ConfigProvider } from 'antd-mobile'
import './index.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import _ from 'lodash'
import DailyBill from './components/DailyBill'
import enUS from 'antd-mobile/es/locales/en-US'

const Month = () => {
    //Group data by month
    const billList = useSelector(state => state.bill.billList)
    const monthGroup = useMemo(()=>{
        //Use lodash to group monthly data
        return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY | MM'))
    },[billList])

    //Control the opening and closing of the time picker popup
    const [dateVisible, setDateVisible] = useState(false)

    //Control date display
    const [currentDate, setCurrentDate] = useState(()=>{
        return dayjs(new Date()).format('YYYY | MM')
    })
    //Calculate monthly income, expenses, and balance
    const [currentMonthList, setCurrentMonthList] = useState([])
    const monthResult = useMemo(() => {
      if (!currentMonthList || currentMonthList.length === 0) {
          return {
              pay: 0,
              income: 0,
              total: 0
          }
      }
  
      const pay = currentMonthList
          .filter(item => item.type === 'pay')
          .reduce((a, c) => a + c.money, 0)
      const income = currentMonthList
          .filter(item => item.type === 'income')
          .reduce((a, c) => a + c.money, 0)
  
      return {
          pay,
          income,
          total: pay + income
      }
  }, [currentMonthList])

    //Display the current month’s data upon initialization
    useEffect(() => {
        const nowDate = dayjs().format('YYYY | MM')
        if (monthGroup[nowDate]){
            setCurrentMonthList(monthGroup[nowDate])
        }
    },[monthGroup])
        
    //Retrieve the data for the selected month when the confirm button of the time picker is clicked
    const onConfirm = (date)=>{
        setDateVisible(false)
        const formatDate = dayjs(date).format('YYYY | MM')
        setCurrentDate(formatDate)
        setCurrentMonthList(monthGroup[formatDate])
    }

    //Group the current month’s bill by day
    const dayGroup = useMemo(() => {
        const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
        const keys = Object.keys(groupData)
        return {
            groupData,
            keys
        }
    },[currentMonthList])

    

    return (
    <div className="monthlyBill">
      <NavBar className="nav" backIcon={false}>
        MONTHLY BILL
      </NavBar>
      <div className="content">
        <div className="header">
          {/* Day switch area */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
            {currentDate + ''} 
            </span>
            {/* Change the arrow direction when the popup is displayed */}
            <span className= {classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          {/* Monthly bill’s payment, income, and balance data */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">payment</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">income</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">balance</span>
            </div>
          </div>
          {/* Use time picker from antD */}
          <ConfigProvider locale={enUS}>
          <DatePicker
            className="kaDate"
            title="Accounting Date"
            precision="month"
            visible={dateVisible}
            max={new Date()}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)} // Close on overlay click
          />
          </ConfigProvider>
        </div>
        {/* Render the daily bill component */}
        {
        dayGroup.keys.map(key => {
                return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
            })
        }
        
      </div>
    </div >
  )
}

export default Month