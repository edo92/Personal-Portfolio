import React, { Component, memo } from 'react'
import { Icon } from 'antd'
import './style.css'

import ProjectCard from '../../../ProjectCard'

class Carousel extends Component {
    state={ 
        qtyItems: Number,
        countSlide: 0,
        loading: true
    };

    componentDidMount(){
        window.addEventListener('resize', this.windowWidth );
        this.windowWidth();
    }
    
    componentWillUnmount(){
        window.removeEventListener('resize', this.windowWidth );
    }

    windowWidth = ( e ) => {
        let quantity, width = e ? e.target.innerWidth : window.innerWidth;
        if( width < 576 ) { quantity = 1 }
        else if ( width < 768 ) { quantity = 2 }
        else if ( width < 992 ) { quantity = 2 }
        else { quantity = 3 };

        if( quantity !== this.state.qtyItems) {
            this.setState({ qtyItems: quantity });
        }
    }

    render(){
        const props = this.props;
        let { list } = props;
        const CarouselList = () => {
            let carousel = list.slice( this.state.countSlide );
            return(
                carousel.map(( item, i ) => {
                    if( i < this.state.qtyItems ){
                        return(
                            <ProjectCard 
                                item={ item }
                                key={ item.name+i }
                                modalSwitch={ this.props.modalSwitch }
                            />
                        )
                    } else return null;
                }) 
            )
        };

        const GoBackBtn = () => {
            let { countSlide } = this.state;
            
            return(
                this.state.countSlide > 0 && 
                <button 
                    onClick={()=> this.setState({ countSlide: countSlide -1 })}
                    id='backward' className='carousel-btns'
                >
                    <Icon type='left' />
                </button>
            )
        };
        
        const GoForwardBtn = () => {
            let { countSlide, qtyItems } = this.state;
            let listLength = props.list.length;

            return(
                listLength !== (countSlide + qtyItems) && qtyItems < listLength &&
                <button 
                    onClick={()=> this.setState({ countSlide: countSlide + 1 })} 
                    id='forward' className='carousel-btns'
                >
                    <Icon type='right' />
                </button>
            )
        };

        return(
            <span>
                <GoBackBtn/>
                    <ul className='row col-12 py-2 px-4 m-0 sm-flex'>
                        <CarouselList/>
                    </ul>
                <GoForwardBtn/>
            </span>
        )
    }
};

/* ======= **** RESIZE BUG **** ========== */
/* ======= **** SKELETON BUG **** ========== */

export default memo( Carousel );