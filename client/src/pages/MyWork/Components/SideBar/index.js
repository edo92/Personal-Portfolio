import React from 'react'
import { Icon } from 'antd'

import SideBar from '../../../../components/SideBar'
import bgImg from '../../../../static/images/banner.jpg'

const navItems = [
    {
        name: 'Front End',
        icon: 'appstore',
        target: 'frontend'
    },
    {
        name: 'Back End',
        icon: 'code',
        target: 'backend'
    },
    {
        name: 'UI - UX',
        icon: 'ant-design'
    },
    
];

const MyWorkSidebar = props => {
    return (
        <SideBar
            backgroundImg={ bgImg }
        >
            <ul id='sidebar-nav' className='col-12 px-0'>
                { navItems.map(( item, i ) => {
                    return (
                        <li key={ item.name+i } onClick={()=> props.selectOption( item.target ) } className='scene'>
                            <div className='box'>
                                <div className='right face'>
                                    <Icon type={ item.icon }/>
                                </div>
                                <div className='font face'>
                                    <small className='m-0'>{ item.name }</small>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </SideBar>
    )
};

export default MyWorkSidebar;