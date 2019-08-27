import React, { Component } from 'react';
import Slideshow from 'react-native-slideshow';
import PropTypes from 'prop-types';


class SlideShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Sayur Mayur',
                    caption: 'Caption 1',
                    url: 'https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2016/05/Membeli-Sayuran-dengan-Aplikasi-Ilustrasi.jpg',
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'https://pasundanekspres.co/wp-content/uploads/2019/05/DD.png',
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'https://i1.wp.com/www.maxmanroe.com/vid/wp-content/uploads/2018/07/Pengertian-Pasar-Tradisional.jpg?resize=640%2C361&ssl=1',
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />
        );
    }
}
export default SlideShow