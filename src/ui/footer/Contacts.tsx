import React, {FC} from 'react';
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import phone from '../../assets/icon/phone.png'
import email from '../../assets/icon/email.png'
import mobile from '../../assets/icon/mobile.png'
import whatsapp from '../../assets/icon/whatsapp.png'
import {color} from "../../constants-style";

const styles = createStyles({
    root: {
        color: 'white'
    },
    title: {
        fontWeight: 600,
        fontSize: 14,
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 5
    },
    phone: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
        fontSize: 12,
        marginRight: 10
    },
    icon: {
        width: 25
    },
    email: {
        marginLeft: 10,
        fontSize: 12,
        marginRight: 10,
        cursor: 'pointer',
        "&:hover": {
            color: color.brandColor
        }
    }
});

interface IProps extends WithStyles<typeof styles> {

}

const Contacts: FC<IProps> = ({classes}) => {
    return <div className={classes.root}>
        <div className={classes.title}>КОНТАКТЫ</div>
        <div className={classes.wrapper}>
            <img src={mobile} className={classes.icon}/>
            <div className={classes.phone}>
                <div>
                    <span>8-(702)-792-70-02</span>
                </div>
                <span>8-(701)-022-60-02</span>
            </div>
            <a href={"https://wa.me/77027927002"} target={'_blank'}>
                <img src={whatsapp} style={{width: 90}}/>
            </a>
        </div>
        <div className={classes.wrapper}>
            <img src={phone} className={classes.icon}/>
            <div className={classes.phone}>
                <span>8-(7122)-29-04-64</span>
                <span>8-(7122)-29-84-75</span>
            </div>
        </div>
        <div>
            <div className={classes.wrapper}>
                <img src={email} className={classes.icon}/>
                <div>
                    <span><a href={"mailto:krepservice.kz@mail.ru"} className={classes.email}>krepservice.kz@mail.ru</a></span>
                </div>
            </div>
        </div>

    </div>
};

export default withStyles(styles)(Contacts)
