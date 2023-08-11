import React, { Component } from 'react'
import loader from './spin.gif'
export class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loader} alt="loading"/>
      </div>
    )
  }
}

export default Loader
