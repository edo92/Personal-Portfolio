import React from 'react';
import './css/index.css'

const SideBar = props => {
    return(
        <div id='mywork-sidebar-container' className={`col-2 ${ props.className}`}>
            <div id='sidebar-header' className='col-12 p-0'>
                <h2 className='text-center'>E.J</h2>
            </div>
            <div className='col-12 p-0'>
                { props.children }
            </div>
        </div>  
    )
};

export default React.memo( SideBar );


