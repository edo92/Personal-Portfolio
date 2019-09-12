import React from 'react'
import { Modal, Icon, Carousel } from 'antd'
import './style.css'

const ProjectModal = props => {
    let { project } = props;
    return (
        <Modal
            title={ project && project.name }
            visible={ props.modal }
            onCancel={ props.modalSwitch }
        >
            { project ? 
                <div className='col-12'>
                    <div className='col-12'>
                    <Carousel autoplay>
                        <div>
                            <img className='img-fluid' alt='project-main-img' src={ project.image }/>
                        </div>
                        { project.images && project.images.map( img => {
                            return (
                                <div>
                                    <img className='img-fluid' alt='project-images' src={ img }/>
                                </div>
                            )
                        })}
                    </Carousel>
                    </div>
                    <div className='p-3 color-black'>
                        { project.desc ? project.desc : <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                            penatibus et illa vel
                        </p>}
                    </div>
                    <div className='p-1'>
                        <span className='px-1'><Icon type='web'/></span>
                        <span>Website: <a href='/google.com'>https//google.com</a></span>
                    </div>
                    <div>
                        <span className='px-1'><Icon type='github'/></span>
                        <span>Github: <a href='/github.com'>https//Github.com</a></span>
                    </div>
                </div>
            : null }
            
        </Modal>
    )
};

export default ProjectModal;