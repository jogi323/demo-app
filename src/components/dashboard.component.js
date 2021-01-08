import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
  logout = () => {
    sessionStorage.clear();
    this.props.history.push("/sign-in")
  }
  render() {
    return (
      <div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
export default withRouter(Dashboard);
