import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import icon from '../styles/icon.png'

const App = (props) => {
  return (
    <div>
      <div className='mainContainer'>
        <div className='logo'>
          <img src={icon} alt='Logo' height='55' />
          <p>Mini Wikipedia</p>
        </div>

        <ul className='nav'>
          <li><IndexLink to='/' activeClassName='active'>Page</IndexLink></li>
          <li><Link to='/bookmarks' activeClassName='active'>Bookmarks</Link></li>
        </ul>
      </div>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
