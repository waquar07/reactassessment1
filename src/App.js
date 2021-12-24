import './App.css';
import './Component/Style.css'
import React, { Component } from 'react'
import FunctionComponent from './Component/FunctionComp';
import ClassComponent from './Component/ClassComponent';

class App extends Component {

  constructor() {
    super();
    this.state={
      toggle1: true,
      toggle2: true
    }
  }
   funhandler=()=>{
    this.setState({
      toggle1:  !this.state.toggle1,   
    })
  }  

  
  classhandler=()=>{
    this.setState({
      toggle2:  !this.state.toggle2,   
    
    })
  }  

  render() {
    return (
      
      <div className="App">
        
        <h1 className="Head">Styling Using Functional and Class Component</h1>
             
        <button className='function-button' onClick={this.funhandler}>To see styling in functional Component</button>
        <button className='class-button' onClick={this.classhandler}>To see styling in class Component</button> 

        <div>{this.state.toggle1?null:<FunctionComponent/>}</div>
        <div>{this.state.toggle2?null:<ClassComponent/>}</div>
             
      </div>
    )
  }
}


export default App;