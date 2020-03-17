import React, {FC} from 'react';
import {createStyles, WithStyles, withStyles} from "@material-ui/core";
import MainMenu from "../main-menu/MainMenu";
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const styles = createStyles({
    headerCenter: {
        borderTop: '5px solid #f94836',
        height: '10vh',
        minHeight: 94,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
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
        ['@media (max-width:980px)']: {
            justifyContent: 'center'
        }
    },
    headerBottom: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        background: '#393f4b',
        height: '8vh',
        minHeight: 70
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
        fontSize: 14,
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
        minWidth: 400,
        marginLeft: '15%',
        ['@media (max-width:980px)']: {
            display: 'none'
        }
    },
    information: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 999,
        minWidth: 400,
        marginLeft: '10%',
    },
    wrapperLogo: {
        zIndex: 999,
        marginLeft: '15%',
        ['@media (max-width:980px)']: {
            marginLeft: 0
        }
    }
});

interface IProps extends WithStyles<typeof styles> {

}

const Header: FC<IProps> = ({classes}) => {

    return <div>
        <div className={classes.headerCenter}>
            <div className={classes.wrapperLogo}>
                <img src={'http://krepmaster.kz/thumb/2/ioFwbRQHVDdnwWayrO8mVg/282r48/d/logo.png'}/>
            </div>
            <div className={classes.wrapperPhone}>
                <div className={classes.information}>
                    <PhoneIcon style={{color: 'red', marginRight: 10}}/><span className={classes.phone}>8 771 177 32 42 / 8 7122 28-64-75</span>
                </div>
                <div className={classes.information}>
                    <QueryBuilderIcon style={{color: 'red', marginRight: 10}}/><span className={classes.date}>Пн–Пт 09:00–18:00, Сб 09:00–16:00</span>
                </div>
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


