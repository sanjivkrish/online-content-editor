import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import './styles.css';

const Header = props => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar className="header-title">
                <Typography varient="h6" color="inherit">
                    { props.title }
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header