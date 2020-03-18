import React, {FC} from 'react';
import './App.css';
import Header from "./ui/header/Header";
import {Route} from 'react-router-dom';
import {createStyles, WithStyles, withStyles} from "@material-ui/core";
import ProductCard from "./ui/product-card/ProductCard";
import Footer from "./ui/footer/Footer";

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
        position: 'relative',
        width: '60%',
        marginTop: 200,
        marginBottom: 50,
        border: '1px solid red',
        ['@media (max-width:440px)']: {
            width: '98%',
        }
    },
    footer: {
        minHeight: 200,
        borderTop: '3px solid #f94836',
        background: '#393f4b',
        width: '100%',
        boxShadow: 'inset 0px 0px 5px 3px rgba(0,0,0,0.46)'
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
                <Route exact path={'/'} render={() => <div><ProductCard/></div>}/>
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
