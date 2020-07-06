import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from  './Components/List'
import NewTask from './Components/NewTask'

class App extends Component{
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

  buttonClick = (val) =>{
    let newList = [...this.state.list]
    newList.push(val)
    this.setState({list: newList})
  }
  render (){
    return(
    <div className="App">
      <NewTask buttonClickProp = {this.buttonClick}/>
      <List listProp = {this.state.list}/>
    </div>
  );
  }
}

export default App;
