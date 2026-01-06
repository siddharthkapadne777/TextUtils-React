import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <nav className={`navbar ${props.mode ? 'dark-mode' : 'light-mode'}`}>
      <h1 className='nav-title'>{props.title}</h1>
      <ul className='nav-ul'>
        <li className='nav-li'><Link to='/'>{props.firstLink}</Link></li>
        <li className='nav-li'><Link to='/about'>{props.secondLink}</Link></li>
        {/* <li className='nav-li'><a href='/'>{props.thirdLink}</a></li>
        <li className='nav-li'><a href='/'>{props.fourthLink}</a></li> */}
      </ul>
      <label className='checkbox-container' htmlFor="mode-checkbox">
        <input type="checkbox" id='mode-checkbox' onClick={props.toggleMode}/>
        {props.mode ? 'Light' : 'Dark'}
      </label>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  firstLink: PropTypes.string,
  secondLink: PropTypes.string,
  thirdLink: PropTypes.string,
  fourthLink: PropTypes.string
}

NavBar.defaultProps = {
  title: 'Your Title Here',
  firstLink: 'Home',
  secondLink: 'About',
  thirdLink: 'Services',
  fourthLink: 'Contact'
}
