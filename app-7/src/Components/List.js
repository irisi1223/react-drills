import React, {Component} from 'react'
import Todo from './Todo'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div >{this.props.listProp.map((e, i) => {
                return <Todo elementProp = {e} key = {i}/>
            })}</div>
        )
    }
}


export default List

