import React, { Component } from 'react';
import './style.css';

class MainHeader extends Component {
    render(){
        return(
            <div id='main-header-container' className='col-12 p-0'>
                <div id='main-header-inner' className='col-12'>
                    <div>
                        <h1 id='header-logo'>Hamster</h1>
                    </div>
                </div>
            </div>
        )
    }
};

export default MainHeader;