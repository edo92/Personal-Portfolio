import React, { memo } from 'react';
import './style.css';

import Carousel from './Components/Carousel/index';
import CardSkeleton from './Components/CardSkeleton'
import ProjectModal from './Components/ProjectModal';

class ShowcaseCarousel extends React.Component {
    state={
        loading: true,
        modalSwitch: false,
    }

    componentDidMount(){
        this.loadingState();
    }

    modalSwitch = project => {
        this.setState({
            viewProject: project,
            modalSwitch: !this.state.modalSwitch
        })
    }

    loadingState = () => {
        setTimeout(() => {  
            this.setState({
                loading: false
            })
        }, 800);
    }

    render(){
        const props = this.props;
        return(
            <div className='col-12 p-5 my-3'>
                <div className='col-12 m-0 px-4'>
                    <h4 className='content-title'>{ props.title }</h4>  
                </div>
                <div id='showcase-container'>
                    <div className='col-12 p-0'>
                        { this.state.loading ? 
                            <CardSkeleton/> 
                            :
                            <Carousel 
                                modalSwitch={ this.modalSwitch } 
                                list={ this.props.list }
                            />
                        }
                    </div>
                </div>
                <ProjectModal 
                    project={ this.state.viewProject }
                    modal={ this.state.modalSwitch }
                    modalSwitch={ this.modalSwitch } 
                />
            </div>
        )
    }
};
export default memo( ShowcaseCarousel );
