import { Button, DatePicker, Input, NavBar, ConfigProvider } from 'antd-mobile'
import Icon from '@/components/Icon'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/typeList'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { addBillList } from '@/store/modules/billStore'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import enUS from 'antd-mobile/es/locales/en-US'

const New = () => { 

  const navigate = useNavigate()

  //Control button switch
  const [billType, setBillType] = useState('pay') 
  //Collect amount of money
  const [money, setMoney] = useState('')
  const moneyChange = (value) => {
    setMoney(value)
  }

  //Collect type of bill
  const [useFor, setUseFor] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    //define updateViewport function to set the window size the same as mobile
    const updateViewport = () => {
      const metaViewport = document.querySelector('meta[name="viewport"]')

      if (window.innerWidth > 768) { 
        metaViewport?.setAttribute("content", "width=375, initial-scale=1")
      } else {
        metaViewport?.setAttribute("content", "width=device-width, initial-scale=1")
      }
    }

    updateViewport(); 
    window.addEventListener("resize", updateViewport)

    return () => {
      window.removeEventListener("resize", updateViewport)
    };
  }, [dispatch]);
  //Save a new bill
  const saveBill = () => {
    //Collect form data
    const data = {
        type: billType,
        money: billType === 'pay' ? -money : +money,
        date: date,
        useFor: useFor
    }
    dispatch(addBillList(data))
    setMoney('')
  }
  //Control selected date of the new bill
  const [date, setDate] = useState()
  //Control the opening and closing of the time picker
  const [dateVisible, setDateVisible] = useState(false)
  //Comfirm selected date
  const dateConfirm = (value) =>{
    setDate(value)
    setDateVisible(false)
  }
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
      KEEP AN ACCOUNT
      </NavBar>
      {/* Bill type selection area */}
      <div className="header">
        <div className="kaType">
          <Button
            className={classNames(billType === 'pay' ? 'selected' : '')}
            shape="rounded"
            onClick={()=>setBillType('pay')}
          >
            Payment
          </Button>
          <Button
            className={classNames(billType === 'income' ? 'selected' : '')}
            shape="rounded"
            onClick={()=>setBillType('income')}
          >
            Income
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={()=>setDateVisible(true)}>{dayjs(date).format('YYYY-MM-DD')}</span>
              {/* time picker */}
              <ConfigProvider locale={enUS}>
              <DatePicker
                className="kaDate"
                title="Accounting Date"
                max={new Date()}
                visible={dateVisible}
                onConfirm={dateConfirm}
              />
              </ConfigProvider>
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={moneyChange}
              />
              <span className="iconCurrency">¥</span>
            </div>
          </div>
        </div>
      </div>
      {/* Render the bill type list */}
      <div className="kaTypeList">
        {billListData[billType].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    // Selected effect
                    <div
                        className={classNames(
                            'item',
                            useFor === item.type ? 'selected' : ''
                        )}
                        key={item.type}
                        onClick={()=> setUseFor(item.type)}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={saveBill}>
          SAVE
        </Button>
      </div>
    </div>
  )
}

export default New