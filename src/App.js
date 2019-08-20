import React, { Component } from 'react';
// import logo from 'assets/images/logo.svg';
import Layout from 'components/layout';

import { GloablStyle } from './style';

class App extends Component {
  render() {
    return (
      <div className="app">
        <GloablStyle></GloablStyle>
        <Layout></Layout>
      </div>
    )
  }
}

export default App;
