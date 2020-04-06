import React, {FC, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {color} from "../../constants-style";
import mobile from "../../assets/icon/phone-black.png";
import whatsapp from "../../assets/icon/whatsapp-black.png";
import address from "../../assets/icon/address-black.png";
import email from "../../assets/icon/email-black.png";
import shop1 from "../../assets/address/shop1.jpg";
import shop2 from "../../assets/address/shop2.jpg";
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import Helmet from "react-helmet";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100vh',
            display: 'flex',
            flexDirection: 'column',
            color: color.baseColor,
            marginBottom: 20
        },
        title: {
            textAlign: 'center',
            alignSelf: 'center',
            width: 250,
            borderBottom: `2px solid ${color.brandColor}`,
            marginBottom: 20
        },
        wrapperContacts: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        shop1: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 20
        },
        icon: {
            marginRight: 15
        },
        emailWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },
        email: {
            marginLeft: 10,
            fontSize: 18,
            marginRight: 10,
            cursor: 'pointer',
            color: color.baseColor,
            "&:hover": {
                color: color.brandColor
            }
        },
        wrapperAddress: {
            width: 300,
            border: '2px dashed black',
            "&:hover": {
                opacity: 0.5
            }
        },
        wrapperImg: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

        },
        helpText: {
            color: color.brandColor,
            fontWeight: 600
        }
    }),
);
const Contacts: FC<RouteComponentProps> = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);

    const classes = useStyles();


    return <div className={classes.root}>
        <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
            title="Контакты"
            titleTemplate="Krep Service - %s"
            defaultTitle="Krep Service"
            base={{"target": "_blank", "href": "https://krepservice.kz/"}}
            meta={[
                {"name": "description", "content": "Магазин крепежных материалов, в Атырау"},
                {"property": "og:type", "content": "Крепежи, болты, гайки, саморезы, шурупы, такелаж"}
            ]}
            link={[
                {"rel": "Крепеж", "href": "https://krepservice.kz/"},
            ]}
        />
        <div className={classes.title}>
            <span style={{color: 'black', fontSize: 18}}>Контакты</span>
        </div>
        <div className={classes.wrapperContacts}>
            <div style={{marginBottom: 20, marginRight: 20}}>
                <div className={classes.shop1}>
                    <img src={mobile} className={classes.icon}/>
                    <div>
                        <div>8-(702)-792-70-02</div>
                        <div>8-(7122)-29-84-75</div>
                    </div>
                </div>
                <div className={classes.shop1}>
                    <img src={address} className={classes.icon}/>
                    <div>
                        <span>ул. Курмангазы 73 (Т. Бигельдинова д.30) <div> офис AGASA 1 этаж</div></span>
                    </div>
                </div>
                <div>
                    <div className={classes.helpText}>Нажмите, чтобы открыть карту</div>
                    <a href={'https://go.2gis.com/4s9hw'} target={'_blank'}> <img src={shop2} className={classes.wrapperAddress}/></a>
                </div>
            </div>
            <div style={{marginBottom: 20}}>
                <div className={classes.shop1}>
                    <img src={mobile} className={classes.icon}/>
                    <div>
                        <div>8-(701)-022-60-02</div>
                        <div>8-(7122)-29-04-64</div>
                    </div>
                </div>
                <div className={classes.shop1}>
                    <img src={address} className={classes.icon}/>
                    <div>
                        <span>ул. И.Тайманова д 133А, <div>ЦСМ "Байтерек", 3-ангар, 36 бутик</div></span>
                    </div>
                </div>
                <div>
                    <div className={classes.helpText}>Нажмите, чтобы открыть карту</div>
                    <a href={'https://go.2gis.com/6nmnk'} target={'_blank'}><img src={shop1} className={classes.wrapperAddress}/></a>
                </div>
            </div>
        </div>
        <div className={classes.emailWrapper}>
            <img src={email} className={classes.icon}/>
            <div>
                <span><a href={"mailto:krepservice.kz@mail.ru"}
                         className={classes.email}>krepservice.kz@mail.ru</a></span>
            </div>
        </div>
        <div className={classes.emailWrapper}>
            <a href={"https://wa.me/77027927002"} target={'_blank'}>
                <img src={whatsapp} style={{width: 150}}/>
            </a>
        </div>
    </div>

};

export default withRouter(Contacts)
