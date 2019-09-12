import React, { Component } from 'react'
import { Drawer } from 'antd'
import './style.css'

import MenuList from './Components/Menu/Menu';

let btn = React.createRef();
let open = React.createRef();

class Hamburger extends Component {
    state = {
        drawer: false
    };
    
    handleMenuOpen = () => {
        this.setState({ drawer: !this.state.drawer });
        btn.current.classList.toggle('change'); 
        open.current.classList.toggle('isOpen')
    };

    render(){
        let height = '2px';
        let color = '#e8e8e8'

        const menuStyle = {
            bar3:{
                width: '25px',
                height: height,
                backgroundColor: color,
                margin:' 6px 0',
            },
            bar2:{
                width: '30px',
                height: height,
                backgroundColor: color,
                margin:' 6px 0',
            },
            bar1:{
                width: '35px',
                height: height,
                backgroundColor: color,
                margin:' 6px 0',
            }
        }
        return (
            <div ref={ open } id='hamburger-container' className='col-12'>
                <div 
                    ref={ btn }
                    onClick={ this.handleMenuOpen } 
                    className='container-hbMenu navbar-toggler'  
                    data-toggle='collapse' data-target='#navbarNav' 
                    aria-controls='navbarNav' aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <div style={ menuStyle.bar1 } className='bar1'></div>
                    <div style={ menuStyle.bar2 } className='bar2'></div>
                    <div style={ menuStyle.bar3 } className='bar3'></div>
                </div>
                <Drawer
                    title='Menu'
                    placement='right'
                    closable={ true }
                    onClose={ this.handleMenuOpen }
                    visible={ this.state.drawer }
                    className='text-center visible-sm'
                >
                    <MenuList/>                    
                </Drawer>
            </div>
        )
    }
};
 
export default Hamburger;