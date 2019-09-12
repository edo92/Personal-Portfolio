import React from 'react'
import { Button, Divider } from 'antd'
import './css/index.css'

import SocialIcons from '../../components/SocialIcons'
import MapSkills from './Components/MapSkills'

import { mySkills, selfImg } from './Static'

const ResumeLayout = () => {
    return (
        <div id='resume-container' className='col-12'>
            <div id='resume-sidebar' className='col-3'>
                <ul className='col-12 p-0 m-0 text-center'>
                    <li className='col-6' >
                        <div id='self-image'>
                            <img className='img-fluid' alt='self-img' src={ selfImg }/>
                        </div>
                    </li>
                    <li className='col-6'>
                        <div id='sidebar-intro' className='col-12'>
                            <h4>Eduard Jacobs</h4>
                            <p>Full Stack Web Developer</p>
                        </div>
                    </li>
                    <li className='col-6'>
                        <div id='sidebar-icons' className='col-12'>
                            <SocialIcons/>
                        </div>
                    </li>
                    <li className='col-6'>
                        <div id='download-resume' className='col-12'>
                            <Button className='col-12' icon='download'>
                                Download Resume
                            </Button>
                        </div>
                    </li>
                </ul>
            </div>

            <div id='resume-body' className='col-9 p-0'>
                <div id='body-header' className='col-12 p-0'>
                    <ul className='col-12 m-0 p-0'>
                        <li>
                            <a href='/'><Button> Go Back </Button></a>
                        </li>
                        <li>
                            <h2> Resume </h2>
                        </li>
                    </ul>
                    <Divider className='m-0'/>
                </div>
                <div className='col-12'>
                    <div id='skills-container' className='col-12 px-0 py-4'>
                        <MapSkills skills={ mySkills }/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResumeLayout;