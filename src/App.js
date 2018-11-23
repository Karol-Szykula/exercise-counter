import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css'
import Counter from './Counter'
import Form from './Form.js'
// import Users from './Users.js'
import Users2 from './Users2.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Counter
            startValue={5}
            min={-10}
            max={10}
          />
          <Form />
          {/* <Users
            numberOfResults={5}
          /> */}
          <Users2/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
