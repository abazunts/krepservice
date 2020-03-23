import React, {FC} from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {aboutCompany} from "../../repository/about-company-repository";
import {color} from "../../constants-style";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            textAlign: 'center',
            width: 250,
            borderBottom: `2px solid ${color.brandColor}`,
            marginBottom: 20
        },
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            textAlign: 'justify'
        },
        paragraph: {
            marginBottom: 20,
            color: color.baseColor,
            "& span": {
                marginLeft: 50
            },
            "& div": {
                marginLeft: 50,
            },

        },
        paragraphMargin: {
            fontWeight: 600,
            marginLeft: 50
        }
    }),
);

const About: FC = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.title}>
            <span style={{color: 'black', fontSize: 18}}>О Компании</span>
        </div>
        <div className={classes.paragraph}>
            <span
                className={classes.paragraphMargin}>{aboutCompany.paragraph1.substring(0, 23)}</span>{aboutCompany.paragraph1.substring(23, aboutCompany.paragraph1.length)}
        </div>
        <div className={classes.paragraph}>
            <span>{aboutCompany.paragraph2}</span>
        </div>
        <div className={classes.paragraph}>
            <span>{aboutCompany.paragraph3.substring(0, 27)}</span>
            <b>{aboutCompany.paragraph3.substring(27, 41)}</b> {aboutCompany.paragraph3.substring(41, aboutCompany.paragraph3.length)}
        </div>
        <div className={classes.paragraph}>
            <span>{aboutCompany.paragraph4.substring(0, 11)}</span><b>{aboutCompany.paragraph4.substring(11, 25)}</b>{aboutCompany.paragraph1.substring(23, aboutCompany.paragraph1.length)}
        </div>
        <div className={classes.paragraph}>
            <span>{aboutCompany.paragraph5}</span>
        </div>
        <div className={classes.paragraph}>
            <b>{aboutCompany.paragraph6}</b>
        </div>
    </div>
};

export default About;
