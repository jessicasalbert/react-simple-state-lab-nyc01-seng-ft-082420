import React, { Component } from 'react';

export default class Cell extends React.Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        } 
      }
    
      handleClick = () => {
        this.setState(previousState => {
          return {
            color: '#333'
          }
        })
      }

    render() {
        return <div onClick={this.handleClick}className="cell" style={{backgroundColor: this.state.color}}></div>
    }
}