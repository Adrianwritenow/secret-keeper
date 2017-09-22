import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from "../actions";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            full_name: "",
            message: "",
            password: ""
        }
    }

    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    register = (event) => {
        event.preventDefault();

        const register = this.props.register;
        register(this.state, () => {
          this.setState({
              email: "",
              full_name: "",
              message: "",
              password: ""
          })
        });
    }

    render() {
      return (
        <div className="Register">
          <form onSubmit={this.register}>
            <fieldset>
              <legend>{this.props.loggedIn
                      ? "Register as a different user"
                      : "Register"}</legend>
              <div className="input-single">
                  <input type="text" value={this.state.email} placeholder='Email' onChange={this.updateState('email')}/>
              </div>
              <div className="input-single">
                  <input type="text" value={this.state.full_name} placeholder='Full Name' onChange={this.updateState('full_name')}/>
              </div>
              <div className="input-single">
                  <input type="text" value={this.state.message} placeholder='Secret' onChange={this.updateState('message')}/>
              </div>
              <div className="input-single">
                  <input type="password" value={this.state.password} placeholder='Password' onChange={this.updateState('password')}/>
              </div>

              <button type="submit">Register</button>
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
        register: (regInfo, callback) => dispatch(register(regInfo, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
