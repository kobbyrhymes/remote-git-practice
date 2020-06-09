import React, { Component } from 'react'

class AddBank extends Component {
    state = {
        name: null,
        number: null,
        bank: null,
        branch: null,
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBank(this.state);
           
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Account Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} /><br></br>
                <label htmlFor="name">Account Number:</label>
                    <input type="text" id="number" onChange={this.handleChange} /><br></br>
                <label htmlFor="bank">Bank Name:</label>
                    <input type="text" id="bank" onChange={this.handleChange} /><br></br>
                <label htmlFor="name">Bank Branch:</label>
                    <input type="text" id="branch" onChange={this.handleChange} /><br></br>
                <button>Submit</button>
                </form>
            </div>
        )
    }    
}

export default AddBank