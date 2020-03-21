import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        num: 0
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.num < this.props.images.length - 1) {
                this.setState({ num: this.state.num + 1 });
            }
            else {
                this.setState({ num: 0 });
            }
        }, 4000);
    }


    render() {
        const CarouselIcon = () => {
            return (
                <div style={{ borderRadius: '50%', hight:'10px', width:'10px', background: 'white' }}></div>
            )
        }
        return (
            <div>
                <div className="col-12 row">
                    <div>
                        <img className="img-responsive col-12" style={{ maxHeight: "500px", objectFit: 'contain' }} src={this.props.images ? this.props.images[this.state.num] : null} />
                        <CarouselIcon />
                    </div>
                </div>
            </div>
        )
    }
};

export default Carousel;