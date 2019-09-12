import './style.css'
import { logos } from './logos';

const Skills = () => {
    return (
        <div id='skills-container' className='col-12 px-0'>
            <h2 className='content-title'>My Skills</h2>
            <div className='col-12 p-0 bg-dot-grid'>
                <ul className='row col-12 p-5 m-0 text-center'>
                    { logos.map(( logo, i ) => {
                        return (
                            <li className='col-2' key={ logo.title+i }>
                                <img src={ logo.image } height={60}/>
                                <p><small>{ logo.title }</small></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Skills;