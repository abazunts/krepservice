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
        ['@media (max-width:820px)']: {
            display: 'none',
        }
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
                    <Route  path={'/'} render={() => <CatalogMenu/>}/>
                    <Route exact path={'/'} render={() => <div className={classes.slider}>
                        <SliderComponent images={images}/>
                    </div>
                    }/>
                </div>
                <Route exact path={'/'} render={() => <MainPage products={products}/>}/>
                <Route path={'/about'} render={() => <div>О компании</div>}/>
                <Route path={'/price'} render={() => <div>Продукция</div>}/>
                <Route path={'/contacts'} render={() => <div>Контакты</div>}/>
            </div>

            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    );
};

export default withStyles(styles)(App);
