import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {DetailType} from "../../types";
import {CardMedia} from "@material-ui/core";
import Helmet from "react-helmet";

const useStyles = makeStyles({
    root: {
        maxWidth: 285,
        width: 285,
        height: 255
    },
    media: {
        height: 160,
        width: 285,
    },
    button: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 12
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
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.button}>
                        {product.title}
                    </Typography>
                    {/*<Typography gutterBottom variant="h5" component="h2">*/}
                    {/*        <Button size="small" className={classes.button}>*/}
                    {/*            */}
                    {/*        </Button>*/}
                    {/*</Typography>*/}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default DetailCard;
