import {
    AppBar,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@material-ui/core';
import {Menu as MenuIcon, List as ListIcon} from '@material-ui/icons';
import {css} from 'emotion';
import React, {useState} from 'react';
import {backendCreateServer} from './mocked_backend/serwer';
import {ROUTES, Routes} from './Routes';
import {useHistory} from 'react-router-dom';

backendCreateServer();

export const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const history = useHistory();

    const toggleDrawer = () => setDrawerOpen(previousState => !previousState);

    const handleClickEmployeeList = () => {
        toggleDrawer();
        history.push(ROUTES.WORKERS_LIST);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">HL Tech Organizer</Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={toggleDrawer}>
                <Divider />
                <List>
                    <ListItem button onClick={handleClickEmployeeList}>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Employee List'} className={drawerElementStyle} />
                    </ListItem>
                </List>
            </Drawer>
            <Container>
                <div className={css({marginTop: 10})}>
                    <Routes />
                </div>
            </Container>
        </>
    );
};

const drawerElementStyle = css({
    marginRight: 15,
});
