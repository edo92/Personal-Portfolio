import React from 'react'
import { Icon } from 'antd'
import './style.css'

const MenuList = () => {
    return (
        <div className='hm-list-container'>
            <ul className='col-12 p-0 m-0 list-none'>
                <li>
                    <Icon type='dashboard'/>
                    <span> Projects </span>
                </li>
                <li>
                    <Icon type='project'/>
                    <span> Resume </span>
                </li>
                <li>
                    <Icon type='star'/>
                    <span>About Me</span>
                </li>
                <li>
                    <Icon type='star'/>
                    <span> Contact </span>
                </li>
            </ul>
        </div>
    )
};

export default MenuList;
