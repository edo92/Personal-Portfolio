import React from 'react'
import { Button, Divider } from 'antd';
import './style.css'

import SideBar from './Components/SideBar'

const MyWorkLayout = () => {
    return (
        <div className='row col-12 p-0 m-0 h-100'>
            <SideBar/>
            <div id='mywork-container' className='col-10 p-0 h-100'>
                <ul className='col-12 p-0 m-0'>
                    <li>
                        <a href='/'><Button>Go Back</Button></a>
                    </li>
                    <li>
                        <h2>My Work</h2>
                    </li>
                </ul>
                <Divider className='m-0'/>
            </div>
        </div>
    )
};

export default MyWorkLayout;