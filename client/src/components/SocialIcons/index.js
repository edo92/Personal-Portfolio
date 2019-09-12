import React from 'react'
import { Icon } from 'antd'

const SocialIcons = () => {
    return (
        <span>
            <a href='facebook.com'>
                <Icon type='facebook'/>
            </a>

            <a href='instagram.com'>
                <Icon type='instagram'/>
            </a>
        
            <a href='github.com'>
                <Icon type='github'/>
            </a>
        </span>
    )
};

export default SocialIcons;