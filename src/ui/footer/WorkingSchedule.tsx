import React, {FC} from 'react';
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import address from '../../assets/icon/address.png'
import calendar from '../../assets/icon/calendar.png'

const styles = createStyles({
    root: {
        color: 'white'
    },
    title: {
        fontWeight: 600,
        fontSize: 14,
    },
    wrapperCalendar: {
        display: 'flex',
        marginTop: 5,
        alignItems: 'center'
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
    calendar: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10
    },
    addressWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10
    }
});

interface IProps extends WithStyles<typeof styles> {

}

const WorkingSchedule: FC<IProps> = ({classes}) => {
    return <div className={classes.root}>
        <div className={classes.title}>ГРАФИК РАБОТЫ</div>
        <div className={classes.wrapperCalendar}>
            <img src={calendar} className={classes.icon}/>
            <div className={classes.calendar}>
                <div>
                    Пн–Пт 09:00–18:00
                </div>
                <div>
                    Сб 10:00–16:00
                </div>
            </div>

        </div>
        <div className={classes.addressWrapper}>
            <img src={address} className={classes.icon}/>
            <div>
                <div className={classes.phone}>Наши адреса:</div>
                <div className={classes.phone}>
                    <span>г. Атырау, ТД Байтерек 38 бутик</span>
                    <span>г. Атырау, Бизнес – центр AGASA 1 этаж</span>
                </div>
            </div>

        </div>
    </div>
};

export default withStyles(styles)(WorkingSchedule)
