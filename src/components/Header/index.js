import React from 'react'
import {Link} from 'react-router-dom'
import './headerStyle.css'
const Header = () => {
    return (
        <header className='headerStyle'>
            <Link to="/">
                <h1 className='headerText'>Character of Thrones</h1>
            </Link>
        </header>
    )
}

export default Header