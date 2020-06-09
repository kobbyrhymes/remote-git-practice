import React from 'react'
import './Banks.css'


    
const Banks = ({banks, deleteBank}) => {
    const bankList = banks.length ? ( 
        banks.map(bank => {
            return (
                <div className="bank" key={bank.id}>
                    <div>Account Name: {bank.name}</div>
                    <div>Account Number: {bank.number}</div>
                    <div>Bank Name: {bank.bank}</div>
                    <div>Bank Branch: {bank.branch}</div>
                    <button onClick={() => {deleteBank(bank.id)}}>Delete Account</button>   
                    </div>
            )   
        })
    
    ) : (
            <h4 className="center">Ooops...!!! You have not added any Accounts.</h4>
    )
    return (
        <div className="bank-list">
            { bankList }
        </div>
    )
    
}
         

export default Banks