import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {customerImages} from '../../repository/customers-image-repository'

const useStyles = makeStyles({
    slider: {
        width: 1024,
        height: 150,
        ['@media (max-width:1120px)']: {
            width: 800,
        },
        ['@media (max-width:820px)']: {
            width: 500,
        }
    },

});

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 6,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: {max: 1366, min: 1024},
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: {max: 820, min: 420},
        items: 2,
        slidesToSlide: 1,
    }
};

const settings = {
    swipeable: true,
    draggable: false,
    showDots: false,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 1000,
    keyBoardControl: true,
    transitionDuration: 1000,
    containerClass: "carousel-container",
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
};

const CustomerSlider = () => {

    const classes = useStyles();
    return <div className={classes.slider}>
        <Carousel responsive={responsive} {...settings}>
            {customerImages.map(image => <img src={image}/>)}
        </Carousel>
    </div>
};

export default CustomerSlider
