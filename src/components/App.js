import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import PostList from './PostList'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />

          <div className='wrap-content'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/:filter' exact component={PostList} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
