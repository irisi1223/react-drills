import React, {Component} from 'react';


class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        // this.handleLogin = this.handleLogin
    }

    handleUsernameChange = (e) => {
        this.setState({username: e.target.value})
    }


    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }


    handleLogin = () => {
        alert(`username: ${this.state.username} password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input onChange={(e) => this.handleUsernameChange(e)} type='text'/>
                <input onChange={(e) => this.handlePasswordChange(e)} type='text'/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}



export default Login;