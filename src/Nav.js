import React from 'react'
import './Nav.css';

export const Nav = () => {
    return (
        <div>
            <nav className='nav'>
                <a href="#" className='navbar-brand'>Logo</a>
                <ul>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;