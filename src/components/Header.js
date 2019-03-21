import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
          <h1>REACT<span>JS</span></h1>
          <nav>
            <ul>
              <li><NavLink exact to='/'>Dashboard</NavLink></li>
              <li><NavLink to='/hot'>Hot</NavLink></li>
              <li><NavLink to='/new'>New</NavLink></li>
              <li><NavLink to='/rising'>Rising</NavLink></li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Header
