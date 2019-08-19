import React, { Component } from 'react';
import Header from 'components/header';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import routers from '@/routers/index'
import { Result, Button } from 'antd';

class Layout extends Component {

  render() {
    return (
      <Router basename="/">

        <Header></Header>

        <div className="app-container">
          <Switch>
            {
              routers.map(({ component, page }) => (
                <Route
                  key={page}
                  exact
                  path={page.toLowerCase()}
                  component={component}
                />
              ))
            }

            <Redirect
              path="/"
              exact
              to={{ pathname: '/index' }}
            />
            {/* todo: 单独写一个组件 */}
            <Route
              render={() => (
                <Result
                  className="app-not-found"
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                  extra={
                    <Button type="primary">Back Home</Button>
                  }
                />
              )}
            />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default Layout;