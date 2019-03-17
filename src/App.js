import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index'
import './Styles.css';
import RandomNumbersContainer from './views/RandomNumbers/RandomNumbersContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RandomNumbersContainer />
      </Provider>
    );
  }
}

export default App;
