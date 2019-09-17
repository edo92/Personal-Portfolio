import React, { memo } from 'react'
import { Icon, Divider } from 'antd'
import './style.css'

import BreadCrumb from '../../../../components/Breadcrumb'

const ProjectList = props => {
    return(
        <div className='col-sm-6 col-md-4 p-3'>
            <ul id='project-card'>
                <li>
                    <div id='cardImg-container'>
                        <img src={ props.item.image[0] } className='img-fluid' alt='project-card'/>
                    </div>
                </li>
                <li>
                    <div id='project-describe'>
                        <span>{ props.item.name }</span><br/>
                    </div>
                </li>
                <li>
                    <div className='p-2'>
                        <small>{ props.item.desciption }</small>
                    </div>
                </li>
                
                <li>
                    <div className='my-5'>
                        <Divider className='m-0'/>
                    </div>
                </li>
                <li>
                    <div className='p-2 pb-3'>
                        <small className='view-text'>{ props.item.summary }</small>
                    </div>
                </li>
                <li>
                    <div className='p-1'>
                        <div className='py-2'>
                            <small className='px-1'><Icon type='global'/></small>
                            <small>Website: <a href='/google.com'>{ props.item.website }</a></small>
                        </div>
                        <div className='py-2'>
                            <small className='px-1'><Icon type='github'/></small>
                            <small>Github: <a href='/github.com'>{ props.item.github }</a></small>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='py-2 p-1'>
                        <span className='display-flex'>
                            <span>
                                <BreadCrumb 
                                    routes={ props.item.routes }
                                    website={ props.item.website }
                                    style={{ fontSize:'10px' }}
                                />
                            </span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default memo( ProjectList );
