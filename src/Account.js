import React, { Component } from 'react';

export default class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }
  }
  _deposit(e){
    e.preventDefault();
    var newBalance = parseInt(this.state.balance) + parseInt(this.refs.accountChange.value);
    this.setState({
      balance: newBalance
    })
    this.refs.accountChange.value = "";
  }
  _withdraw(e){
    e.preventDefault();
    var newBalance = parseInt(this.state.balance) - parseInt(this.refs.accountChange.value);
    if (newBalance >= 0){
      this.setState({
        balance: newBalance
      })
    }
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" ref="accountChange" placeholder="enter an amount" />
        <input type="button" value="Deposit" onClick={this._deposit.bind(this)} />
        <input type="button" value="Withdraw" onClick={this._withdraw.bind(this)} />
      </div>
    )
  }
}
