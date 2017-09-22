import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles/App.css';
import BaseLayout from './containers/baseLayout';
import Login from "./containers/Login";
import Register from "./containers/Register";
import UserInfo from "./containers/UserInfo";
import Splash from './containers/Splash';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import {loadTokenFromCookie} from "./actions";

class App extends Component {
    componentWillMount() {
        const loadToken = this.props.loadToken;
        loadToken();
    }
    render() {
        return (
          <BrowserRouter>
            <Switch>
              <BaseLayout>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/secret" component={UserInfo}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
              </BaseLayout>
            </Switch>
          </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadToken: () => dispatch(loadTokenFromCookie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
