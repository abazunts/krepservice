import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, {ListItemProps} from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {productionMenu} from "../../repository/catalog-menu-repository";
import {color} from "../../constants-style";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,

        },
        menuTitle: {
            height: 30,

            color: color.baseColor,
            "&:hover": {
                backgroundColor: color.brandColor,
                color: 'white'
            }
        },
        list: {
            width: 230,
        },
        catalogMenuTitle: {
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            fontWeight: 600,
            width: 300,
            backgroundColor: color.brandColor
        }
    }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

const CatalogMenu = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.catalogMenuTitle}>Наша продукция</div>
            {/*<Divider/>*/}
            <List component="nav" aria-label="secondary mailbox folders" className={classes.list}>
                {productionMenu.map((product) => <NavLink to={product.link}><ListItemLink button
                                                                                          className={classes.menuTitle}>
                    <ListItemText primary={product.title}/>
                </ListItemLink></NavLink>)}
            </List>
        </div>
    );
};

export default CatalogMenu;
