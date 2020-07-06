import React, {Component} from 'react'

class NewTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''

        }
    }

    handleChange = (val) =>{
        this.setState({input: val})
    }

    buttonClick = () =>{
        this.props.buttonClickProp(this.state.input)
        this.setState({input: ''})
    }
    render(){
        return(
            <div>
                <input value = {this.state.input} onChange = {(e) => this.handleChange(e.target.value)}/>
                    <button onClick = {() => this.buttonClick()}> submit </button>
            </div>
        )
    }
}


export default NewTask