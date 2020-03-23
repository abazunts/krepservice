import React, {FC} from 'react';
import {ProductType} from "../../types";
import ProductCard from "../product-card/ProductCard";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import CustomerSlider from "../customers/Slider";
import {color} from "../../constants-style";

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

const MainPage: FC<IProps> = ({products}) => {

    const classes = useStyles();

    return <div className={classes.root}>
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

export default MainPage
