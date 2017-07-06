import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Provider } from 'react-redux'


export const Routes = ({ children, store }) => (
  <Provider store={ store }>
    <Router>
      <div>
        { children }
      </div>
    </Router>
  </Provider>
)

export const NavRoute = ({ children }) => (
  <div className="nav-route">
    { children }
  </div>
)

export const RouteLink = ({ text, to }) => (
  <Link to={to}>
    <div className="link">{text}</div>
  </Link>
)
