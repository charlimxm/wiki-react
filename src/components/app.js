import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'
import Page from './page'
import Bookmark from './bookmark'
import Detail from './detail'
import icon from './styles/icon.png'
import './styles/app.css'

class App extends Component {
  render () {
    return (
      <div className='mainContainer'>
        <div className='logo'>
          <img src={icon} alt='Logo' height='55' />
          <p>Mini Wikipedia</p>
        </div>

        <BrowserRouter>
          <div>
            <ul className='nav'>
              <li><NavLink exact to='/'>Pages</NavLink></li>
              <li><NavLink to='/bookmarks'>Bookmarks</NavLink></li>
            </ul>

            <div>
              <Route exact path='/' component={Page} />
              <Route path='/bookmarks' component={Bookmark} />
            </div>
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App
