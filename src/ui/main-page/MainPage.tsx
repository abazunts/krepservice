import React, {FC, useEffect} from 'react';
import {ProductType} from "../../types";
import ProductCard from "../product-card/ProductCard";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink, withRouter} from "react-router-dom";
import CustomerSlider from "../customers/Slider";
import {color} from "../../constants-style";
import {RouteComponentProps} from "react-router";
import Helmet from "react-helmet"


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
        borderBottom: `2px solid ${color.brandColor}`,
        marginBottom: 20,
        marginTop: 50,
        ['@media (max-width:620px)']: {
            display: 'none'
        }
    },
    customerSlider: {
        ['@media (max-width:620px)']: {
            display: 'none'
        }
    }
});

interface IProps {
    products: ProductType[]
}

const MainPage: FC<IProps & RouteComponentProps> = ({products, ...props}) => {

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);


    return <div className={classes.root}>
        <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
            title="Крепеж в Атырау"
            titleTemplate="Krep Service - %s"
            defaultTitle="Krep Service"
            base={{"target": "_blank", "href": "https://krepservice.kz/"}}
            meta={[
                {"name": "description", "content": "Магазин крепежных материалов, в Атырау, Крепежи, болты, гайки, саморезы, шурупы, такелаж"},
                {"property": "og:type", "content": "Крепежи, болты, гайки, саморезы, шурупы, такелаж"}
            ]}
            link={[
                {"rel": "Крепеж", "href": "https://krepservice.kz/"},
            ]}
        />
        <div className={classes.productsWrapper}>
            {products.map((product) => <div key={product.id} className={classes.mainPage}><NavLink
                to={'/products' + product.link}><ProductCard product={product}/></NavLink></div>)}
        </div>
        <div className={classes.title}>
            <span style={{color: 'black', fontSize: 18}}>Нам доверяют</span>
        </div>
        <div className={classes.customerSlider}>
            <CustomerSlider/>
        </div>
    </div>
};

export default withRouter(MainPage)
