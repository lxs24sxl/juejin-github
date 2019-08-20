import React, { Component } from 'react';
import Header from 'components/header';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import routers from '@/routers/index';
import Status404 from './404';

class Layout extends Component {
  render() {
    return (
      <Router basename="/">

        <Header>
          
        </Header>

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
              to={{ pathname: '/timeline' }}
            />

            <Route
              render={() => <Status404></Status404>}
            />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default Layout;