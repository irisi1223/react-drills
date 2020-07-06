import React, {Component} from 'react'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>{this.props.elementProp}</div>
        )
    }
}


export default Todo