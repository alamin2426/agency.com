import React from 'react';
import './Header.css'
import logoImage from '../../../assets/images/agancy.png'

const Header = () => {
    return (
        <header>
            <div>
                <nav>
                    <div>
                        <img src= {logoImage} alt="dekha" />
                    </div>
                    <ul>
                        <li><a href="#">Home 🏡</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;