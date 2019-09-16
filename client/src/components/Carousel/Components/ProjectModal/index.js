import React from 'react'
import { Modal, Icon, Carousel } from 'antd'
import './style.css'

import BreadCrumb from '../../../../components/Breadcrumb'

const ImageCarousel = props => {
    return (
        <Carousel autoplay>
            <div>
                <img id='project-main-img' className='img-fluid' alt='project-main-img' src={ props.image }/>
            </div>
            { props.imageList && props.imageList.map( img => {
                return (
                    <div>
                        <img className='img-fluid' alt='project-images' src={ img }/>
                    </div>
                )
            })}
        </Carousel>
    )
};

const ProjectModal = props => {
    let { project } = props;
    return (
        <Modal
            title={ project && project.name }
            visible={ props.modal }
            onCancel={ props.modalSwitch }
        >
            <div className='col-12 p-0'>
                { project ? 
                    <div className='w-100'>
                        <div className='col-12 p-2'>
                            <div className='col-12 p-0'>
                                <ImageCarousel image={ project.image } imageList={ project.images }/>
                            </div>
                        </div>
                        <div className='col-12 p-3 pt-4'>
                            { project.desc ? project.desc : <p>
                                <span className='view-text'>{ project.summary }</span>
                            </p> }
                        </div>
                        <div className='col-12 py-2 p-1'>
                            <span className='display-flex'>
                                <span className='px-2'>Page Routes:</span>
                                <span>
                                    <BreadCrumb 
                                        routes={ project.routes }
                                        website={ project.website }
                                    />
                                </span>
                            </span>
                        </div>
                        <div className='col-12 py-2 p-1'>
                            <span className='px-1'><Icon type='global'/></span>
                            <span>Website: <a href='/google.com'>{ project.website }</a></span>
                        </div>
                        <div className='col-12 py-2 p-1'>
                            <span className='px-1'><Icon type='github'/></span>
                            <span>Github: <a href='/github.com'>{ project.github }</a></span>
                        </div>
                    </div>
                : null }
            </div>
        </Modal>
    )
};

export default ProjectModal;