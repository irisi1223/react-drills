import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
      input: ''
    }
  }


  handleChange = (value) =>{
    this.setState({input: value})
  }

  buttonClick = () =>{
    let newList = [...this.state.list]
    newList.push(this.state.input)
    this.setState({list: newList, input: '' })
  }
  render(){
  return (
      <div className="App">
        <input value = {this.state.input} onChange = {(e) => this.handleChange(e.target.value)}></input>
        <button onClick = {() => this.buttonClick()}></button>
        {this.state.list.map((e, i) => {
          return <div key = {i}>
            {e}
          </div>
        })}
      </div>
    );
  }
}
export default App;
