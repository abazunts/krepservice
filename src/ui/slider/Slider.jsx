import React, {FC} from 'react';
import Slider from 'infinite-react-carousel';
import {makeStyles} from "@material-ui/core/styles";
import {color} from "../../constants-style";

const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    accessibility: false,
    arrows: false,
    shift: 20
};

const useStyles = makeStyles({

});

const SliderComponent = ({images}) => {

    const classes = useStyles();

    return <div className="content-form home-form">
        <div>
            <Slider {...settings} >
                {images.map(img => <img width={'100%'} height={'80%'} src={img}/> )}

            </Slider>
        </div>
    </div>
};

export default SliderComponent
