import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logOutFromSession} from "../actions";





class BaseLayout extends Component {

  logOut = (event) => {
      event.preventDefault();
      console.log('click');
      this.props.logout();
      console.log('bang');
  }
  render(){
    return (
        <div className="navBarCont">
        <nav className="navbar navbar-dark ">
          <ul className="nav">
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/login">Log In</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" className="nav-link" exact to="/secret">Secret</NavLink>
            </li>
          </ul>
          <button onClick={this.logOut} className="logOutBtn">Log Out</button>
        </nav>
      {this.props.children}
    </div>

  );
}
}
const mapStateToProps = (state) => {
    return {
      token: !!state.token

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(logOutFromSession())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
