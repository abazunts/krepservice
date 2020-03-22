import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {detail} from "../../repository/product-detail-repository";
import DetailCard from "./DetailCard";

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


const ProductDetail: FC<RouteComponentProps<{key: string}>> = (props) => {

    const classes = useStyles();
    const {key} = props.match.params;


    return <div className={classes.root}>

        <div className={classes.productsWrapper}>
            {detail[key].map((product) => <div key={product.id} className={classes.mainPage}><DetailCard product={product}/></div>)}
        </div>
    </div>
};

export default withRouter(ProductDetail)
