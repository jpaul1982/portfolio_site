import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <h5>Email: jpaulmolnar@gmail.com / Phone:(651)338-9319</h5> 
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
