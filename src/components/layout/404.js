
import React, { Component } from 'react';
import { Button, Result } from 'antd';
import { withRouter } from 'react-router-dom';

class Status404 extends Component {

  switchToIndex = () => {
    this.props.history.push('/timeline');
  }

  render () {
    return (
      <Result
        className="app-not-found"
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={this.switchToIndex}>Back Home</Button>
        }
      />
    )
  }
 
}

export default withRouter(Status404);