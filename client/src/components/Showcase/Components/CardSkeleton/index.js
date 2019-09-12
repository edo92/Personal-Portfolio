import React from 'react'
import { Skeleton } from 'antd'
import './style.css'

const CardSkeleton = () => {
    return (
        <ul className='row col-12 p-0 m-0 sm-flex'>
            <li className='col-sm-6 col-md-4'>
                <span className='skeleton-body'>
                    <Skeleton active />
                </span>
                <span className='skeleton-bottom'>
                    <Skeleton active />
                </span>
            </li>
            <li className='col-sm-6 col-md-4 hidden-xs'>
                <span className='skeleton-body'>
                    <Skeleton active />
                </span>
                <span className='skeleton-bottom'>
                    <Skeleton active />
                </span>
            </li>
            <li className='col-md-4 hidden-md'>
                <span className='skeleton-body'>
                    <Skeleton active />
                </span>
                <span className='skeleton-bottom'>
                    <Skeleton active />
                </span>
            </li>
        </ul>
    )
};

export default CardSkeleton;