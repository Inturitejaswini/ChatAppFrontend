import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme,Drawer,Button,CssBaseline,AppBar,Toolbar,List,Typography,Divider,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GroupIcon from '@material-ui/icons/Group';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import '../css/nav.css'
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            // color:theme.transitions.color(['green'])
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className="dashboard-Container">
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon className="menuIcon" />
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        Google ChatApp
                   </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className="drawer-list">
                    <div className="groupIcon-div">
                        <Button>
                            <GroupIcon />
                            <h5>Contacts</h5>
                        </Button>
                    </div>
                    <div className="formOutlinedIcon-div">
                        <Button>
                            <ForumOutlinedIcon />
                            <h5>Conversations</h5>
                        </Button>
                    </div>
                    <div className="phoneIcon-div">
                        <Button>
                            <PhoneOutlinedIcon />
                            <h5>Phone calls</h5>
                        </Button>
                    </div>
                    <div className="invitationIcon-div">
                        <Button>
                            <DraftsOutlinedIcon />
                            <h5>Invitations</h5>
                        </Button>
                    </div>
                </List>
                <Divider />
                <List>

                </List>
            </Drawer>
        </div>
    );
}
