import React, { Component } from 'react';
import Banks from './Banks';
import AddBank from './AddBank';
import Cash from './Cash';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    banks : [
      { name: 'Kobby Rhymes', number: '660066385372', bank: 'Barclays Bank', branch: 'Tema', id: 1 },
      { name: 'Kobby Blan', number: '134282056322', bank: 'Stanbic Bank', branch: 'Accra', id: 2 },
    ]
  }
  deleteBank = (id) => {
    const banks = this.state.banks.filter(bank => {
      return bank.id !== id
    });
    this.setState({
      banks:banks
    })
  }
  addBank = (bank) => {
    bank.id = Math.random();
    let banks = [...this.state.banks, bank];
    this.setState({
      banks: banks
    })
  }
  
  render() {

    
    return (
      <div className="App"> 
        <h1 className="center blue-text">Bankie</h1>
        <Banks banks={this.state.banks} deleteBank={this.deleteBank}/> 
        <h2>Add An Account</h2>
        <AddBank addBank={this.addBank} />
            
      </div>
      
      
        
      
    );
  }
}




export default App; 


