import React, {FC} from 'react';
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import Contacts from "./Contacts";
import WorkingSchedule from "./WorkingSchedule";
import {color} from "../../constants-style";
import facebook from '../../assets/socialicon/facebook.png'
import instagram from '../../assets/socialicon/instagram.png'
import vk from '../../assets/socialicon/vk.png'

const styles = createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    copyright: {
        position: 'relative',
        color: 'white',
        opacity: '0.6',
        fontSize: 12,
        borderTop: `1px solid ${color.brandColor}`,
        paddingTop: 10,
        width: '50%',
        textAlign: 'center'
    },
    contacts: {
        marginTop: 20,
        marginBottom: 40
    },
    footerInfo: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        ['@media (max-width:555px)']: {
            justifyContent: 'flex-start',
            marginLeft: 25
        }
    },
    icon: {
        margin: 5,
        opacity: 0.8,
        '&:hover': {
            opacity: 1
        }
    },
    vk: {
        opacity: 0.8,
        '&:hover': {
            opacity: 1
        }
    },
});

interface IProps extends WithStyles<typeof styles> {

}

const Footer: FC<IProps> = ({classes}) => {
    const now = new Date();
    const year = now.getFullYear();
    return <div className={classes.root}>
        <div className={classes.footerInfo}>
            <div className={classes.contacts}>
                <Contacts/>
                <div style={{marginTop: 10}}>
                    <div style={{color: 'white'}}>Мы в соцсетях</div>
                <a href="https://www.facebook.com/krepservice" target={'_blank'}>
                    <img src={facebook} className={classes.icon} height="30" width="30" alt="https://www.facebook.com/krepservice" /></a>
                <a href="https://www.instagram.com/krep_service/" target={'_blank'} >
                    <img src={instagram} className={classes.icon} height="30" width="30" alt="https://www.instagram.com/krep_service/" /></a>
                <a href="https://vk.com/id593051730" target={'_blank'}>
                    <img src={vk}  className={classes.vk} height="40" width="40" alt="https://vk.com/id593051730" /></a>
                </div>
            </div>
            <div className={classes.contacts}>
                <WorkingSchedule/>
                <a href="https://top.mail.ru/jump?from=3173840">
                    <img src="https://top-fwz1.mail.ru/counter?id=3173840;t=604;l=1" style={{border:0}} height="40" width="88" alt="Top.Mail.Ru" /></a>
            </div>


        </div>

        <div className={classes.copyright}>
            <p>All rights reserved KrepService © {year}</p>
        </div>
    </div>
};

export default withStyles(styles)(Footer)
