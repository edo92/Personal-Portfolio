import React, { Component } from 'react'

import ProjectCard from '../ProjectList'

const MyWorkBody = props => {
    let list = props.projectList[props.option];
    return (
        <div className='col-12 p-0'>
            <div className='col-12 p-3'>
                { list ? list.map( item => {
                    return (
                        <ProjectCard
                            key={ item._id } 
                            item={ item }
                        />
                    )
                }) : null }
            </div>
        </div>
    )     
};

export default MyWorkBody;