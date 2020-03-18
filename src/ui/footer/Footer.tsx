import React, {FC} from 'react';
import {createStyles, withStyles, WithStyles} from "@material-ui/core";

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
        opacity: '0.8',
        fontSize: 12
    }
});

interface IProps extends WithStyles<typeof styles> {

}

const Footer: FC<IProps> = ({classes}) => {
    const now = new Date();
    const year = now.getFullYear();
    return <div className={classes.root}>
        <div>

        </div>
        <div className={classes.copyright}>
            <p>All rights reserved © {year}</p>
        </div>

    </div>
};

export default withStyles(styles)(Footer)