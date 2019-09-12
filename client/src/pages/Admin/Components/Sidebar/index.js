import React from 'react'
import { Icon } from 'antd'
import './style.css'


const SideBar = props => {
    const iconList = [
        { icon:'plus', action: props.addModalSwtich },
        { icon:'message', link:'', action: props.textBoxSwitch },
    ];

    return (
        <div id='dash-sidebar-container'>
            <div id='sidebar-header' className='col-12 p-0 py-4'>
                <div className='col-12 text-center'>
                    <h6 className='nav-logo'> Admin </h6>
                </div>
            </div>
            <div className='col-12 p-0'>
                <ul id='dash-sidebar-inner' className='col-12'>
                    { iconList.map(( item, i ) => {
                        return (
                            <li key={ item.icon+i } className='py-4'>
                                <div onClick={()=> item.action()}>
                                    <Icon className='nav-icon' type={ item.icon }/>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='col-12 h-100'>
                <div onClick={ props.signOut } className='p-3 pb-5 pos-fixed b-0'>
                    <Icon className='nav-icon p-4' type='logout'/>
                </div>
            </div> 
        </div>
    )
};

export default SideBar;