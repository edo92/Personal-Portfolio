import React from 'react';
import './styles.css';

import { Button } from 'antd';

const CustomButton = props => {
    let styles = {
        background: props.color,
        border: props.border,
    }
    
    return(
        <div className='col-12 p-0'>
            <Button 
                className={`custom-button ${props.className}`}
                onClick={ props.onClick } 
                style={ styles } 
            >
                { props.children }
            </Button>
        </div>
    )
};

export default CustomButton;