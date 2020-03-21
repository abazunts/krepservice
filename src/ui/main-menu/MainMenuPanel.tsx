import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import DomainIcon from '@material-ui/icons/Domain';
import InfoIcon from '@material-ui/icons/Info';
import {color} from "../../constants-style";
import {productionMenu} from "../../repository/catalog-menu-repository";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    productionTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 600
    }
});

const mainMenu = ['Главная', 'О компании', 'Контакты'];


type Anchor =  'left';

const MainMenuPanel = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{background: color.brandColor, color: 'white', opacity: '0.9'}}
        >
            <List>
                {mainMenu.map((text, index) => {
                    let icon = <InboxIcon/>;
                    switch (text) {
                        case 'Главная': {
                            icon = <DomainIcon style={{color: 'white'}}/>;
                            break;
                        }
                        case 'О компании': {
                            icon = <InfoIcon style={{color: 'white'}}/>;
                            break;
                        }
                        case 'Контакты': {
                            icon = <MailIcon style={{color: 'white'}}/>;
                            break;
                        }
                    }
                    return <ListItem button key={text}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                })}

            </List>
            <Divider/>

            <List>
                <div className={classes.productionTitle}>Наша продукция</div>
                {productionMenu.map((text, index) => (
                    <ListItem button key={text.link}>
                        <ListItemText primary={text.title}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <MenuIcon onClick={toggleDrawer('left', true)} fontSize={'large'} style={{color: "white"}}/>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default MainMenuPanel
