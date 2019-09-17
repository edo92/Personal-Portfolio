import React from 'react'
import { Modal, Icon, Divider } from 'antd'
import './style.css'

import BreadCrumb from '../../../Breadcrumb'
import ImageCarousel from '../../../ImageCarousel'
const ProjectModal = props => {
    let { project } = props;
    return (
        <Modal
            visible={ props.modal }
            onCancel={ props.modalSwitch }
        >
            <div id='modalView-container'>
                { project ? 
                    <div className='w-100 pt-3'>
                        <div className='p-2'>
                            <ImageCarousel imageList={ project.image }/>
                        </div>
                        <div className='p-3 pt-4'>
                            { project.desc ? project.desc : <p>
                                <span className='view-text'>{ project.summary }</span>
                            </p> }
                        </div>
                        <div className='p-3'>
                            <span>{ project.description }</span>
                        </div>
                        <div className='py-3'>
                            <div className='w-100 display-flex'>
                                <span className='px-2'>Page Routes:</span>
                                <span>
                                    <BreadCrumb 
                                        routes={ project.routes }
                                        website={ project.website }
                                    />
                                </span>
                            </div>
                        </div>
                        <div className='py-2 p-1'>
                            <span className='px-1 pr-2'><Icon type='global'/></span>
                            <span>Website: <a href='/google.com'>{ project.website }</a></span>
                        </div>
                        <div className='py-2 p-1'>
                            <span className='px-1 pr-2'><Icon type='github'/></span>
                            <span>Github: <a href='/github.com'>{ project.github }</a></span>
                        </div>
                    </div>
                : null }
            </div>
        </Modal>
    )
};

export default ProjectModal;
