import React, {FC} from 'react';
import {createStyles, WithStyles, withStyles} from "@material-ui/core";
import MainMenu from "../main-menu/MainMenu";
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import logo from '../../assets/img/logo-white.png'
import x from '../../assets/img/x-circle.png'
import krep from '../../assets/img/krep.png'
import krep1 from '../../assets/img/krep1.png'
import {NavLink} from "react-router-dom";

const styles = createStyles({
    headerCenter: {
        borderTop: '5px solid #f94836',
        height: '10vh',
        minHeight: 94,
        background: '#f94836',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        boxShadow: 'inset -5px -8px 10px 1px rgba(0,0,0,0.30)',
        "&:before": {
            content: "''",
            right: 0,
            borderBottom: '89px solid #F7F7F7',
            borderLeft: '60px solid transparent',
            borderRight: '0px solid transparent',
            height: '20px',
            position: 'fixed',
            width: '65%',
        },
        ['@media (max-width:1457px)']: {
            justifyContent: 'center',
            "&:before": {
                width: '55%',
            },
        },
        ['@media (max-width:768px)']: {
            justifyContent: 'center',
            "&:before": {
                width: '0%',
                borderLeft: '0px solid transparent',
            },
        }
    },
    headerBottom: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        background: '#393f4b',
        height: '8vh',
        minHeight: 70,
        zIndex: 9999,

    },
    menuWrapper: {
        marginRight: '5%',
        ['@media (max-width:440px)']: {
            display: 'none'
        }
    },
    phone: {
        position: 'relative',
        color: 'black',
        fontSize: 12,
        fontWeight: 600,
        marginRight: '1%',
    },
    date: {
        position: 'relative',
        color: 'black',
        fontSize: 12,
        marginRight: '1%',
    },
    wrapperPhone: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        minWidth: 450,
        marginLeft: '15%',
        ['@media (max-width:768px)']: {
            display: 'none'
        }
    },
    information: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 999,
        minWidth: 450,
        marginLeft: '10%',
    },
    wrapperLogo: {
        zIndex: 999,
        marginLeft: '10%',
        marginBottom: 10,
        ['@media (max-width:980px)']: {
            marginLeft: 10
        }
    },
    logo: {
        cursor: 'pointer',
        width: 300,
    },
    x: {
        width: 15,
        position: 'absolute',
        left: 10,
        top: 10
    },
    x2: {
        width: 15,
        position: 'absolute',
        left: 10,
        top: 65
    },
    x3: {
        width: 15,
        position: 'absolute',
        left: '34%',
        top: 65,
        ['@media (max-width:1457px)']: {
            left: '44%',
        },
        ['@media (max-width:768px)']: {
            left: 'auto',
            right: 10
        }
    },
    x4: {
        width: 15,
        position: 'absolute',
        left: '36%',
        top: 10,
        ['@media (max-width:1457px)']: {
            left: '46.5%',
        },
        ['@media (max-width:1050px)']: {
            left: '47.5%',
        },
        ['@media (max-width:768px)']: {
            left: 'auto',
            right: 10
        }
    },
    krep1: {
        width: 400,
        opacity: '0.1',
        position: 'absolute',
        right: 0,
        top: 5,
        ['@media (max-width:1457px)']: {
            display: 'none',
        },
    },
    krep: {
        width: 400,
        opacity: '0.1',
        position: 'absolute',
        right: 400,
        top: 5,
        transform: 'rotate(-8deg)',
        ['@media (max-width:1457px)']: {
            display: 'none',
        },
    }
});

interface IProps extends WithStyles<typeof styles> {

}

const Header: FC<IProps> = ({classes}) => {
    return <div>
        <div className={classes.headerCenter}>
            <img src={x} className={classes.x}/>
            <img src={x} className={classes.x2}/>
            <img src={x} className={classes.x3}/>
            <img src={x} className={classes.x4}/>
            <div className={classes.wrapperLogo}>
                <NavLink to={'/'}><img src={logo} className={classes.logo}/></NavLink>
            </div>
            <div className={classes.wrapperPhone}>
                <div className={classes.information}>
                    <PhoneIcon style={{color: '#f94836', marginRight: 10}}/>
                    <div style={{display: 'flex', flexDirection: 'column',  minWidth: 400}}>
                        <span className={classes.phone}>8 702 792 70 02 / 8 701 022 60 02</span>
                        <span className={classes.phone}> 8 7122 29 84 75 / 8 7122 29 04 64</span>
                    </div>
                </div>
                <div className={classes.information}>
                    <QueryBuilderIcon style={{color: '#f94836', marginRight: 10}}/><span className={classes.date}>Пн–Пт 09:00–18:00, Сб 10:00–16:00</span>
                </div>
            </div>
            <img src={krep1} className={classes.krep1}/>
            <img src={krep} className={classes.krep}/>
        </div>
        <div className={classes.headerBottom}>
            <div className={classes.menuWrapper}>
                <MainMenu/>
            </div>
        </div>
    </div>
};
export default withStyles(styles)(Header)


