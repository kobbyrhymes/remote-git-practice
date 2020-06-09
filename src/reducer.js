//Reducer! We apply a method based on the action that has been dispatched.

const initialState = {
    balance: 2500,
    transactionHistory: []
};

const reducer = (state = initialState, action) => {
    const newState = {...sate};

    let date = new Date().toLocaleString()

    //using a switch statement instead of if/else
    //receiving and using a payload
      switch (action.type) {

        case "withdraw":
        return {
            ...state,
            balance: sate.balance - action.value,
            transactionHistory: state.transactionHistory.concat({ date: date, transactionType: 'withdraw', amount: action.value, newBalance: state.balance - action.value}) 
        };
        break;

        case "deposit":
        return {
            ...state,
            balance: sate.balance - action.value,
            transactionHistory: state.transactionHistory.concat({ date: date, transactionType: 'deposit', amount: action.value, newBalance: state.balance - action.value}) 
        };
        break;    
    }
    return newState
}

export default reducer;