import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
      }
        
      handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
      }

  render() {

    const {count} = this.state

    return (
      <div className='container'>
        <div className='box'>
           <h1>COUNTER APP</h1><br></br>
           <h2>{count}</h2><br></br><br></br>
           <button className='button' onClick={this.handleIncrement}>Add Count</button>
           <button className='button' onClick={this.handleDecrement} disabled= {count===0 ? true : false}>Lower Count</button>
        </div>
      </div>
    )
  }
}
