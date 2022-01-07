import React from 'react'
import './Nav.css';

export const Nav = () => {
    return (
        <div>
            <nav className='nav'>
                <a href="youtube.com" className='navbar-brand'>Logo</a>
                <ul>
                    <li>
                        <a href="youtube.com">Blog</a>
                    </li>
                    <li>
                        <a href="youtube.com">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;