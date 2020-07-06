import React, {Component} from 'react'

class Img extends Component{
constructor(props){
    super(props)

    } 
    render(){
        return(
            <div>
                <img src = {this.props.urlProp}/>
            </div>
        )
    }
}

export default Img;