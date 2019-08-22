import React, { PureComponent } from 'react';
import Header from 'components/header';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import routers ,{ menus }from '@/routers/index';
import Status404 from './404';
// console.log('menus', menus)

class Layout extends PureComponent {

  getParamsName = (page) => {
    let curMenu = menus.find(menu => menu.page === page.replace(/\//g, ''));
    if (curMenu) {
      return curMenu.params || null
    } else {
      return null
    }
  }
  
  render() {
    return (
      <Router basename="/">

        <Header></Header>

        <div className="app-container">
          <Switch>
            {
              routers.map(({ component, page }) => {
                // exact
                return (
                  <Route
                    key={page}
                    path={this.getParamsName(page) ? `${page.toLowerCase()}/:${this.getParamsName(page)}`: `${page.toLowerCase()}`}
                    component={component}
                  />
                )
              })
            }

            <Redirect
              path="/"
              exact
              to={{ pathname: '/timeline/recommended' }}
            />
            <Redirect
              path="/timeline"
              exact
              to={{ pathname: '/timeline/recommended' }}
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