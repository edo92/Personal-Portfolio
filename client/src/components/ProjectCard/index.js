import React, { memo } from 'react'
import { Button } from 'antd'
import './style.css'

const ProjectCard = props => {
    return(
        <div className='col-sm-6 col-md-4'>
            <ul id='project-card'>
                <li>
                    <div id='cardImg-container'>
                        <img src={ props.item.image[0] } className='img-fluid' alt='project-card'/>
                    </div>
                </li>
                <li>
                    <div id='project-describe'>
                        <span>Los Angeles Highrises</span><br/>
                        <small>By: Gary Jacobs</small><br/>
                    </div>
                </li>
                <li>
                    <div id='view-bttn'>
                        <Button onClick={()=> props.modalSwitch( props.item ) }>View</Button>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default memo( ProjectCard );
