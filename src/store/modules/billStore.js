//Store related to the bill list

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
  name: 'bill',
  // data state
  initialState: {
    billList: []
  },
  reducers: {
    // Synchronous update method
    setBillList (state, action) {
      state.billList = action.payload
    },
    //Synchronous bill add method
    addBill(state, action) {
      state.billList.push(action.payload)
    }
  }
})

//Destructure the actionCreator function
const { setBillList, addBill } = billStore.actions


const getBillList = () => {
  return async (dispatch) => {
    //Asynchronous request
    const res = await axios.get('http://localhost:8888/ka')
    //Trigger synchronous reducer
    dispatch(setBillList(res.data))
  }
}

const addBillList = (data) => {
  return async (dispatch) => {
    //Asynchronous request
    const res = await axios.post('http://localhost:8888/ka', data)
    //Trigger synchronous reducer
    dispatch(addBill(res.data))
  }
}
export { getBillList, addBillList }

//Export reducer
const reducer = billStore.reducer

export default reducer