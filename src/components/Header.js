import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'
import '../assets/css/styles.css'



const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <img id="logo" src={logo} alt="" /> */}
      <span className="icon fas fa-cog"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>J Paul Molnar</h1>
        <p>
        A site dedicated to sharing my development portfolio. 
        <br/>
          Please take a look and feel free to contact me!
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
