import React , { createContext , useReducer }from 'react';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseContext = createContext(initialState);

const reducer = (state,action) => {
    let transactions ;

    switch (action.type) {
        case "DELETE_TRANSACTION":
            transactions = state.filter((t) => t.id !== action.payload);

            localStorage.setItem('transactions',JSON.stringify(transactions))
            return transactions;
        
        case "ADD_TRANSACTION":
            transactions = [action.payload , ...state];
            localStorage.setItem('transactions',JSON.stringify(transactions))
            return transactions;
        default:
            return state;
    }
};

export const ContextProvider = ({ children }) => {

    const deleteTransaction = (id) => {
        dispatch({type:"DELETE_TRANSACTION", payload:id});
    }

    const addTransaction = (transaction) => {
        dispatch({type:"ADD_TRANSACTION", payload:transaction});
    }

    const [transactions,dispatch] = useReducer(reducer,initialState)

    
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return(
        <ExpenseContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            { children }
        </ExpenseContext.Provider>
    )
};