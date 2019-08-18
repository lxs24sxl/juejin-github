import React, { Component } from 'react';
// import logo from 'assets/images/logo.svg';
import Layout from 'components/layout';
import { GloablStyle } from './style';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import routers, { menus } from './routers/index';
class App extends Component {
  render() {
    console.log('routers', routers)
    return (
      <div>
        <GloablStyle></GloablStyle>
        <Layout></Layout>
        <HashRouter basename="/">
          <div className="box">
            <ul className="menu">
              {menus.map(({ page, title }) => (
                <li key={page}>
                  <Link to={`/${page.toLowerCase()}`}>{title}</Link>
                </li>
              ))}
            </ul>
            <div className="content">
              <Switch>
                {routers.map(({ component, page }) => {
                  return <Route key={page} exact path={page.toLowerCase()} component={component} />;
                })}
                <Route
                  render={() => {
                    return <div className="container">not found</div>;
                  }}
                />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App;
