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
import MainMenuPanel from "../main-menu/MainMenuPanel";
import whatsapp from "../../assets/icon/whatsapp.png";

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
        ['@media (max-width:820px)']: {
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
        ['@media (max-width:470px)']: {
            display: 'none'
        }

    },
    menuWrapper: {
        marginRight: '5%',
        ['@media (max-width:470px)']: {
            display: 'none'
        }
    },
    menuWrapperPanel: {
        position: 'relative',
        justifyContent: 'flex-start',
        background: '#393f4b',
        height: 40,
        zIndex: 9999,
        display: 'none',
        paddingLeft: 15,
        ['@media (max-width:470px)']: {
            display: 'flex',
            alignItems: 'center'
        }
    },
    wrapperContacts: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& a": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20
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
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 999,
        minWidth: 450,
        // marginLeft: '15%',
        ['@media (max-width:820px)']: {
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
    phoneInPanel: {
        color: 'white',
        fontSize: 12,
    },
    wrapperLogo: {
        width: '37%',
        textAlign: 'center',

        zIndex: 999,
        marginBottom: 10,
        ['@media (max-width:1000px)']: {
            width: '40%',
        },
        ['@media (max-width:820px)']: {
            width: '100%'
        }
    },
    logo: {
        cursor: 'pointer',
        width: 300,
        ['@media (max-width:1024px)']: {
            width: 270
        },
        ['@media (max-width:820px)']: {
            width: 260
        },
        ['@media (max-width:768px)']: {
            width: 220
        }
    },
    x: {
        width: 15,
        position: 'absolute',
        left: 10,
        top: 10,
        borderRadius: '7px',
        border: '1px solid black',
    },
    x2: {
        width: 15,
        position: 'absolute',
        left: 10,
        top: 65,
        borderRadius: '7px',
        border: '1px solid black',
    },
    x3: {
        width: 15,
        position: 'absolute',
        left: '34%',
        top: 65,
        borderRadius: '7px',
        border: '1px solid black',
        ['@media (max-width:820px)']: {
            left: 'auto',
            right: 10
        },
    },
    x4: {
        width: 15,
        position: 'absolute',
        left: '36%',
        top: 10,
        borderRadius: '7px',
        border: '1px solid black',
        ['@media (max-width:1457px)']: {
            left: '36.5%',
        },
        ['@media (max-width:1200px)']: {
            left: '37%',
        },
        ['@media (max-width:1050px)']: {
            left: '37.5%',
        },
        ['@media (max-width:820px)']: {
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
        ['@media (max-width:1024px)']: {
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
        ['@media (max-width:1280px)']: {
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
                    <div style={{display: 'flex', flexDirection: 'column', minWidth: 400}}>
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
        <div className={classes.menuWrapperPanel}>
            <MainMenuPanel/>
            <div className={classes.wrapperContacts}>
                <a href={'tel:+77027927002'}>
                    <PhoneIcon style={{color: '#f94836', marginRight: 10, marginLeft: 10}}/>
                    <span className={classes.phoneInPanel}>Позвонить</span>
                </a>
                <a href={"https://wa.me/77027927002"} target={'_blank'}>
                    <img src={whatsapp} style={{width: 90}}/>
                </a>
            </div>

        </div>
        <div className={classes.headerBottom}>
            <div className={classes.menuWrapper}>
                <MainMenu/>
            </div>

        </div>
    </div>
};
export default withStyles(styles)(Header)


