import React from 'react'
import { Icon } from 'antd'
import './style.css'

const list = {
    facebook: {
        link: 'https://facebook.com'
    },
    instagram: {
        link: 'https://instagram.com'
    },
    github: {
        link: 'https://github.com'
    },
    linkedin: {
        link: 'https://linkedin.com'
    },
};

const SocialMediaList = props => {
    let { color, size, padding, paddingLeft } = props;
    const style = {
        color: color ? color : '#fff',
        fontSize: size ? size : '3rem',
        padding: padding ? padding : '1.3rem',
        paddingLeft: paddingLeft ? paddingLeft : '0'
    };

    return (
        <div id='social-media-container' className='row col-12'>
            { Object.keys( list ).map(( item, i ) => {
                return (
                    <a key={ list[item].link+i } onClick={ ()=> (
                        window.location.href = list[item].link
                    )}>
                        <Icon style={ style } type={ item }/>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialMediaList;