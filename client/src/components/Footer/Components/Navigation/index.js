import React from 'react'
import './navigation.css'

const Navigation = () => (
    <ul id='footer-naviation' className='row col-12'>
        <li className='col-5'>
            <nav>
                <h2>About</h2>
                <ul className='p-0 m-0 pt-2'>
                    <li>
                        <a href='/resume'>Resume</a>
                    </li>
                    <li>
                        <a href='/mywork'>Projects</a>
                    </li>
                    <li>
                        <a href='/'>Portfolio</a>
                    </li>
                </ul>
            </nav>
        </li>
    
        <li className='col-5'>
            <nav>
                <h2>Contact</h2>
                <ul className='p-0 m-0 pt-2'>
                    <li>
                        <a>Email: edoter92@gmail.com</a>
                    </li>
                    <li>
                        <a>Phone: (818) 404-3185</a>
                    </li>
                    <li>
                        <a>LinedIn: linkedin.com/ed-ej</a>
                    </li>
                </ul>
            </nav>
        </li>
    </ul>
);

export default Navigation;