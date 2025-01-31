export const billListData = {
    pay: [
      {
        type: 'foods',
        name: 'Foods',
        list: [
          { type: 'food', name: 'Meals' },
          { type: 'drinks', name: 'Drinks' },
          { type: 'dessert', name: 'Desserts' },
        ],
      },
      {
        type: 'taxi',
        name: 'Transportation',
        list: [
          { type: 'taxi', name: 'Taxi' },
          { type: 'longdistance', name: 'Travel' },
        ],
      },
      {
        type: 'recreation',
        name: ' Leisure',
        list: [
          { type: 'bodybuilding', name: 'Sports' },
          { type: 'game', name: 'Games' },
          { type: 'audio', name: 'Audio' },
          { type: 'travel', name: 'Tourism' },
        ],
      },
      {
        type: 'daily',
        name: 'Daily',
        list: [
          { type: 'clothes', name: 'Clothes' },
          { type: 'bag', name: 'Bags' },
          { type: 'book', name: 'Books' },
          { type: 'promote', name: 'Knowledge' },
          { type: 'home', name: 'Decoration' },
        ],
      },
      {
        type: 'other',
        name: 'Others',
        list: [{ type: 'community', name: 'Utilities' }],
      },
    ],
    income: [
      {
        type: 'professional',
        name: 'Salary Income',
        list: [
          { type: 'salary', name: 'Salary' },
          { type: 'overtimepay', name: 'Overtime' },
          { type: 'bonus', name: 'Bonus' },
        ],
      },
      {
        type: 'other',
        name: 'Other Income',
        list: [
          { type: 'financial', name: 'Investments' },
          { type: 'cashgift', name: 'Gifts' },
        ],
      },
    ],
  }
  
  export const billTypeToName = Object.keys(billListData).reduce((prev, key) => {
    billListData[key].forEach(bill => {
      bill.list.forEach(item => {
        prev[item.type] = item.name
      })
    })
    return prev
  }, {})