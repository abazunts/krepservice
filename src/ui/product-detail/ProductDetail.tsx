import React, {FC, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {detail} from "../../repository/product-detail-repository";
import DetailCard from "./DetailCard";
import {menuTitleEnum} from "../../constants";
import {productionMenu} from "../../repository/catalog-menu-repository";
import {color} from "../../constants-style";
import Helmet from "react-helmet";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productsWrapper: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainPage: {
        margin: 20
    },
    title: {
        textAlign: 'center',
        width: 250,
        borderBottom: `2px solid ${color.brandColor}`
    }
});


const ProductDetail: FC<RouteComponentProps<{ key: menuTitleEnum }>> = (props) => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);

    const {key} = props.match.params;
    let title;
    switch (key) {
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.anchor)[0].link.split('/')[1]: {
            title = menuTitleEnum.anchor;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.dowels)[0].link.split('/')[1]: {
            title = menuTitleEnum.dowels;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.corrosionProof)[0].link.split('/')[1]: {
            title = menuTitleEnum.corrosionProof;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.washers)[0].link.split('/')[1]: {
            title = menuTitleEnum.washers;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.collars)[0].link.split('/')[1]: {
            title = menuTitleEnum.collars;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.selfTappingScrews)[0].link.split('/')[1]: {
            title = menuTitleEnum.selfTappingScrews;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.rivets)[0].link.split('/')[1]: {
            title = menuTitleEnum.rivets;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.nuts)[0].link.split('/')[1]: {
            title = menuTitleEnum.nuts;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.screws)[0].link.split('/')[1]: {
            title = menuTitleEnum.screws;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.rigging)[0].link.split('/')[1]: {
            title = menuTitleEnum.rigging;
            break;
        }
        case productionMenu.filter((menu) => menu.title === menuTitleEnum.perforation)[0].link.split('/')[1]: {
            title = menuTitleEnum.perforation;
            break;
        }
        default: {
            title = menuTitleEnum.bolts;
            break;
        }
    }

    return <div className={classes.root}>
        <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
            title={title}
            titleTemplate="Krep Service - %s"
            defaultTitle="Krep Service"
            base={{"target": "_blank", "href": "https://krepservice.kz/"+ key}}
            meta={[
                {"name": "description", "content": `${title} в Атырау`},
                {"property": "og:type", "content": `Крепежи, ${title}`}
            ]}
            link={[
                {"rel": "Крепеж", "href": "https://krepservice.kz/"},
            ]}
        />
        <div className={classes.title}>
            <span style={{color: 'black', fontSize: 18}}>{title}</span>
        </div>
        <div className={classes.productsWrapper}>
            {detail[key].map((product) => <div key={product.id} className={classes.mainPage}><DetailCard
                product={product}/></div>)}
        </div>
    </div>
};

export default withRouter(ProductDetail)
