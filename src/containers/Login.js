import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from "../actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    login = (event) => {
        event.preventDefault();

        const login = this.props.login;
        login(this.state.email, this.state.password, () => {
          this.setState({
              email: "",
              password: ""
          });
        });
        this.props.history.push('/secret');
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.login}>
                    <fieldset>
                        <legend>{this.props.loggedIn
                                ? "Log in as a different user"
                                : "Log in"}</legend>
                        <div className="input-single">
                            <input type="text" value={this.state.email} placeholder='Email' onChange={this.updateState('email')}/>
                        </div>
                        <div className="input-single">
                            <input type="password" value={this.state.password} placeholder='Password' onChange={this.updateState('password')}/>
                        </div>

                        <button type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password, callback) => dispatch(login(username, password, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
