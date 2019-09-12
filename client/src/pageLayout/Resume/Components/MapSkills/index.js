import React from 'react'
import { Icon } from 'antd'

const MapAllSkills = props => {
    let { skill } = props;
    return (
        <ul id='skills-list' className='col-12 p-0 m-0'>
            { Object.keys( skill  ).map(( item, i ) => {
                let { name, rate } = skill[item];
                return (
                    <li key={ name } className='col-12 p-0'> 
                        <span id='skill-name'>{ name }</span>
                        { [1,2,3,4,5].map(( num, i ) => {
                            let scale = rate >= num ;
                            return (
                                <Icon 
                                    key={ i }
                                    theme='filled'
                                    type='star'
                                    style={{ 
                                        color: scale ? 'orange' : '#d0d0d0' 
                                    }} 
                                />
                            )
                        })}
                    </li>
                )
            })}
        </ul>
    )
};

const MapSkills = props => {
    let { skills } = props;
    return (
        Object.keys( skills ).map( skill => {
            return (
                <ul className='row col-12 m-0 px-0 py-4'>
                    { Object.keys( skills[skill] ).map( item => {
                        return (
                            <li className='col-4 px-0 py-3'>
                                <MapAllSkills skill={ skills[skill][item] }/>
                            </li>
                        )
                    })}
                </ul>
            )
        })
    )
};

export default MapSkills;