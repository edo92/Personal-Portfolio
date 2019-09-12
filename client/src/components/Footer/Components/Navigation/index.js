import React from 'react'
import './navigation.css'

const Navigation = () => (
    <ul id='footer-naviation' className='row col-12'>
        <li className='col-4'>
            <nav>
                <h2>About</h2>
                <ul className='p-0 m-0 pt-2'>
                    <li>
                        <a>Story</a>
                    </li>
                    <li>
                        <a>Experiance</a>
                    </li>
                    <li>
                        <a>Resume</a>
                    </li>
                </ul>
            </nav>
        </li>
        <li className='col-4'>
            <nav>
                <h2>Projects</h2>
                <ul className='p-0 m-0 pt-2'>
                    <li>
                        <a>Full Stack</a>
                    </li>
                    <li>
                        <a>Front End</a>
                    </li>
                    <li>
                        <a>Back End</a>
                    </li>
                </ul>
            </nav>
        </li>
        <li className='col-4'>
            <nav>
                <h2>Contact</h2>
                <ul className='p-0 m-0 pt-2'>
                    <li>
                        <a>Email</a>
                    </li>
                    <li>
                        <a>Contact Info</a>
                    </li>
                    <li>
                        <a>Linked In</a>
                    </li>
                </ul>
            </nav>
        </li>
    </ul>
);

export default Navigation;