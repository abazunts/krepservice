import React, {FC} from 'react';
import {ProductType} from "../../types";
import ProductCard from "../product-card/ProductCard";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
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
                to={product.link}><ProductCard product={product}/></NavLink></div>)}
        </div>
    </div>
};

export default MainPage
