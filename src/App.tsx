import React, {FC} from 'react';
import './App.css';
import Header from "./ui/header/Header";
import {Route} from 'react-router-dom';
import {createStyles, WithStyles, withStyles} from "@material-ui/core";

const styles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Verdana'
    },
    headerWrapper: {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        width: '100%',
        boxShadow: ' 0px 10px 13px -12px rgba(57,63,75,1)'
    },
    wrapperContent: {
        position: 'relative',
        marginTop: 200,
        border: '1px solid red'
    },
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
                <Route exact path={'/'} render={() => <div>Главная</div>}/>
                <Route  path={'/about'} render={() => <div>О компании</div>}/>
                <Route  path={'/price'} render={() => <div>Продукция</div>}/>
                <Route  path={'/contacts'} render={() => <div>Контакты</div>}/>
            </div>

        </div>
    );
};

export default withStyles(styles)(App);
