import React, { Component } from 'react'
import './App.css'
import Root from './component/Root'
import { Provider } from 'react-redux'
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
            <Root />
      </Provider>
    );
  }
}

export default App;
