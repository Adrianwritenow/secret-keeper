import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserInfo extends Component {
    render() {
        let content = null;
        if (!this.props.loggedIn) {
            content = <p>Please log in or register.</p>
        } else if (this.props.user) {
            content = (
                <dl>
                  <dt>Full Name</dt>
                  <dd>{this.props.user.full_name}</dd>
                  <dt>Email</dt>
                  <dd>{this.props.user.email}</dd>
                  <dt>Secret</dt>
                  <dd>{this.props.user.message}</dd>
                </dl>
            );
        }

        let error = this.props.error;
        if (error) {
          if (Array.isArray(this.props.error)) {
            error = this.props.error.map(error => <div>{error}</div>)
          }
          error = <div className="alert">{error}</div>
        }
        return (
          <div className="wrapper">
            <div className="UserInfo">
              {error}
              {content}
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.token,
        user: state.user,
        error: state.error
    }
}

export default connect(mapStateToProps)(UserInfo);
