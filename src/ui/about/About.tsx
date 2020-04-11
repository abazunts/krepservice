import React, {FC, useEffect} from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {aboutCompany} from "../../repository/about-company-repository";
import {color} from "../../constants-style";
import {RouteComponentProps} from "react-router";
import {withRouter} from "react-router-dom";
import Helmet from "react-helmet";

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

const About: FC<RouteComponentProps> = (props) => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);


    return <div className={classes.root}>
        <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
            title="О компании"
            titleTemplate="Krep Service - %s"
            defaultTitle="Krep Service"
            base={{"target": "_blank", "href": "https://krepservice.kz/"}}
            meta={[
                {"name": "description", "content": "Магазин крепежных материалов, в Атырау, Крепежи, болты, гайки, саморезы, шурупы, такелаж "},
                {"property": "og:type", "content": "Крепежи, болты, гайки, саморезы, шурупы, такелаж"}
            ]}
            link={[
                {"rel": "Крепеж", "href": "https://krepservice.kz/"},
            ]}
        />
        <div className={classes.title}>
            <h1 style={{color: 'black', fontSize: 18}}>О Компании</h1>
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
            <span>{aboutCompany.paragraph4.substring(0, 11)}</span><b>{aboutCompany.paragraph4.substring(11, 25)}</b>{aboutCompany.paragraph4.substring(25, aboutCompany.paragraph4.length)}
        </div>
        <div className={classes.paragraph}>
            <span>{aboutCompany.paragraph5}</span>
        </div>
        <div className={classes.paragraph}>
            <b>{aboutCompany.paragraph6}</b>
        </div>
    </div>
};

export default withRouter(About);
