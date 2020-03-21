import React, {FC, useState} from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, {ListItemProps} from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {productionMenu} from "../../repository/catalog-menu-repository";
import {color} from "../../constants-style";
import {NavLink, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

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
        },
        activeLink: {
            height: 30,
            backgroundColor: color.brandColor,
            color: 'white',
            "&:hover": {
                backgroundColor: color.brandColor,
                color: 'white',
            }
        }
    }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

const CatalogMenu: FC<RouteComponentProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.catalogMenuTitle}>Наша продукция</div>
            <List component="nav" aria-label="secondary mailbox folders" className={classes.list}>
                {productionMenu.map((product, index) => <NavLink key={index} to={product.link} ><ListItemLink button
                                                                                          className={product.link === props.location.pathname ? classes.activeLink : classes.menuTitle} >
                    <ListItemText primary={product.title}/>
                </ListItemLink></NavLink>)}
            </List>
        </div>
    );
};

export default withRouter(CatalogMenu);
