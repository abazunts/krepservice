import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {DetailType} from "../../types";
import {color} from "../../constants-style";
import {Button, CardMedia} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 160,
        width: 260,
    },
    button: {
        color: 'black',
    },
    content: {
        background: 'white',
    }
});


interface IProps {
    product: DetailType
}

const DetailCard: FC<IProps> = ({product}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.img}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                            <Button size="small" className={classes.button}>
                                {product.title}
                            </Button>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default DetailCard;
