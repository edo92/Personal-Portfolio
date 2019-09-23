import React, { Component } from 'react'
import { Icon } from 'antd'
import './style.css'

class ImageCarousel extends Component {
    state={
        viewImg: this.props.imageList[0],
        count: 0
    }

    componentDidMount(){
        this.setState({
            viewImg: this.props.imageList[0],
        })
    }

    slideright = () => {
        if( this.state.count < this.props.imageList.length-1 ){
            this.setState({
                count: this.state.count + 1,
                viewImg: this.props.imageList[this.state.count + 1]
            })
        }
    }

    slideleft = () => {
        if( this.state.count > 0 ){
            this.setState({
                count: this.state.count - 1,
                viewImg: this.props.imageList[this.state.count-1]
            })
        }
    }

    render(){
        return (
            <div id='image-carousel' className='col-12'>
                <div>
                    <button 
                        onClick={ this.slideleft }
                        className='carousel-btns'
                    >
                        <Icon type='left' />
                    </button> 
                </div>
                <div className='col-12 p-0'>
                    <div style={{ backgroundImage:`url(${this.state.viewImg})` }} className='view-img-carousel'></div>
                </div>
                <div>
                    <button 
                        onClick={ this.slideright }
                        className='carousel-btns'
                    >
                        <Icon type='right' />
                    </button>
                </div>
            </div>
        )
    }
};

export default ImageCarousel;