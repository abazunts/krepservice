import React, {FC} from 'react';
import './App.css';
import Header from "./ui/header/Header";
import {Route} from 'react-router-dom';
import {createStyles, WithStyles, withStyles} from "@material-ui/core";
import Footer from "./ui/footer/Footer";
import {color} from "./constants-style";
import MainPage from "./ui/main-page/MainPage";
import {products} from "./repository/product-card-repository";
import CatalogMenu from "./ui/catalog-menu/CatalogMenu";
import {images} from "./repository/images-slider-repository";
import SliderComponent from "./ui/slider/Slider";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
// @ts-ignore
import ScrollUpButton from "react-scroll-up-button";
import ProductDetail from "./ui/product-detail/ProductDetail";
import About from "./ui/about/About";

const styles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Verdana',
        alignItems: 'center',
    },
    headerWrapper: {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        width: '100%',
        boxShadow: ' 0px 10px 13px -12px rgba(57,63,75,1)'
    },
    wrapperContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'relative',
        maxWidth: '80%',
        marginTop: 190,
        marginBottom: 50,
        // border: '1px solid red',
        ['@media (max-width:440px)']: {
            width: '98%',
        },
        ['@media (max-width:1310px)']: {
            maxWidth: '100%',
        },
        ['@media (max-width:1520px)']: {
            maxWidth: '100%',
        }
    },
    footer: {
        minHeight: 200,
        borderTop: `3px solid ${color.brandColor}`,
        background: color.baseColor,
        width: '100%',
        boxShadow: 'inset 0px 0px 5px 3px rgba(0,0,0,0.46)'
    },
    slider: {
        position: 'relative',
        width: '68%',
        alignSelf: 'center'
    },
    topContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '88%',
        borderBottom: `2px dashed ${color.baseColor}`,
        ['@media (max-width:440px)']: {
            width: '98%',
        },
        ['@media (max-width:1370px)']: {
            width: '98%',
        },
        ['@media (max-width:820px)']: {
            display: 'none',
        }
    },

    productDetail: {
        display: 'none',
        justifyContent: 'flex-start',
        width: '88%',
        borderBottom: `2px dashed ${color.baseColor}`,
        ['@media (max-width:440px)']: {
            width: '98%',
        },
        ['@media (max-width:820px)']: {
            display: 'flex',
        }
    },
    upWrapper: {
        background: color.brandColor,
        borderRadius: 25,
        width: 50,
        height: 50,
        padding: 5,
        color: 'white',
        outline:'none'
    },

    AnyClassForContainer: {
        position: 'fixed',
        right: '-100px',
        bottom: '150px',
        transition: 'right 0.5s',
        cursor: 'pointer',
        backgroundColor: ' none',
        borderRadius: 150,
        fontSize: '20px',
        padding: '10px',
        outline:'none'
    },

    AnyClassForTransition: {
        right: '20px',
        outline:'none'
    }

});

interface IProps extends WithStyles<typeof styles> {

}

const App: FC<IProps> = ({classes}) => {
    return (
        <div className={classes.root}>
            <div className={classes.headerWrapper}>
                <Header/>
            </div>
            <div className={classes.wrapperContent}>
                <div className={classes.topContent}>
                    <Route path={'/'} render={() => <CatalogMenu/>}/>
                    <Route path={'/products/:key'} render={() => <ProductDetail/>}/>
                    <Route exact path={'/'} render={() => <div className={classes.slider}>
                        <SliderComponent images={images}/>
                    </div>

                    }/>
                    <Route exact path={'/about'} render={() => <About/>}/>
                </div>
                <div className={classes.productDetail}>
                    <Route path={'/products/:key'} render={() => <ProductDetail/>}/>
                </div>
                <Route exact path={'/'} render={() => <MainPage products={products}/>}/>
                <Route path={'/contacts'} render={() => <div>Контакты</div>}/>
            </div>

            <div className={classes.footer}>
                <Footer/>
            </div>

            <ScrollUpButton
                ContainerClassName={classes.AnyClassForContainer}
                TransitionClassName={classes.AnyClassForTransition}
                EasingType="linear"
                StopPosition={4}
            >
                <div><VerticalAlignTopIcon className={classes.upWrapper} fontSize={'small'}/></div>
            </ScrollUpButton>

        </div>
    );
};

export default withStyles(styles)(App);
