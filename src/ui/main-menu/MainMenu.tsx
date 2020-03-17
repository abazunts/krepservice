import React, {FC, useState} from 'react'
import {Menu} from 'antd';
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {NavLink, withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router";

const {SubMenu} = Menu;

const styles = createStyles({
    menuWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: '100%',
        paddingTop: 45
    },
    menu: {
        background: 'none',
        color: 'white',
        opacity: '0.6',
        marginLeft: 20,
        "&:hover": {
            opacity: '0.9',
            color: 'white'
        },
    },
    menuActive: {
        color: 'white',
        opacity: '0.9',
        borderBottom: '2px solid white',
    }

});

type MenuType = {
    title: string
    link: string
}

interface IProps extends WithStyles<typeof styles> {

}

const MainMenu: FC<IProps & RouteComponentProps> = ({classes, ...props}) => {

    const [menu, setMenu] = useState<MenuType[]>([
        {title: 'Главная', link: '/'},
        {title: 'О Компании', link: '/about'},
        {title: 'Продукция', link: '/price'},
        {title: 'Контакты', link: '/contacts'}]);

    const handleClick = (e: any) => {
        props.history.push(`../${e.key}`);
    };

    return <div className={classes.menuWrapper}>
        {menu.map((menu, index) => <NavLink exact key={index} to={menu.link} activeClassName={classes.menuActive}
                                            className={classes.menu}>{menu.title.toUpperCase()}</NavLink>)}
    </div>
};

export default withRouter(withStyles(styles)(MainMenu))
