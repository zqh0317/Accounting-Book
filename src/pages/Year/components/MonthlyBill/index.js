import './index.scss'
import { useMemo } from 'react'
import dayjs from 'dayjs'

const MonthlyBill = ({date, billList}) => {

  const monthResult = useMemo(() => {
    //Calculation of payment, income, and balance
    const pay = billList.filter(item => item.type === 'pay').reduce((a,c) => a + c.money, 0)
    const income = billList.filter(item => item.type === 'income').reduce((a,c) => a + c.money, 0)
    return {
        pay,
        income,
        total: pay  + income
    }
}, [billList])

  return (
    <div className="monthlyBillForYear">
      <div className="header">
        <div className="dateIcon">
          <span className="date">{dayjs(date).format('MM')}</span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">payment</span>
            <span className="money">{monthResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">income</span>
            <span className="money">{monthResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{monthResult.total.toFixed(2)}</span>
            <span className="type">balance</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default MonthlyBill