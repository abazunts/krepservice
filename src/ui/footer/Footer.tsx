import React, {FC} from 'react';
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import Contacts from "./Contacts";
import WorkingSchedule from "./WorkingSchedule";

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
        borderTop: '1px solid #f94836',
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
    }
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
            </div>
            <div className={classes.contacts}>
                <WorkingSchedule/>
            </div>
        </div>

        <div className={classes.copyright}>
            <p>All rights reserved © {year}</p>
        </div>

    </div>
};

export default withStyles(styles)(Footer)
