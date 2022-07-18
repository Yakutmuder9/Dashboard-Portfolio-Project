import "./dashboard.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/DashFooter/Footer";
import Header from "../../components/Header/DashHeader/DashHeader";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import QuizIcon from "@mui/icons-material/Quiz";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import SettingsIcon from "@mui/icons-material/Settings";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

import Stack from "@mui/material/Stack";
import { auth } from "../../Auth/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import { getCart } from "../../features/cart/cartSlice";

import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = () => {
  const navigate = useNavigate();
  const cartItem = useSelector(selectCart);
  const [user] = useAuthState(auth);
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState([])

 const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDropdownMenu = ()=>{
    fetch("http://localhost:3500/courseEnrolled")
      .then((res) => res.json())
      .then((data) => {
        setDropdown(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleDropdownMenu()
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handlePopClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const pop = Boolean(anchorEl);
  const id = pop ? "simple-popover" : undefined;

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  window.addEventListener("resize", function () {
    if (window.screen.width < 720) {
      return setOpen(false);
    }
  });

  return (
    <div className="vw-100 vh-auto ">
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          open={open}
          style={{
            background: "#2E3B55",
            margin: `${open ? "5px 26px 0px 125px" : "5px 25px 80px 10px"}`,
            paddingRight: "10px",
          }}
          className={open ? "Appbar" : "Appbarcollapse"}
        >
          <Toolbar className="d-flex justify-content-between">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              Dashboard
              <input
                placeholder="Search.."
                className="bg-secondary rounded ms-3 text-wwhite outline-none"
              />
            </Typography>

            <div className="d-flex h-100 align-items-center ">
              <Button variant="contained" className="me-2">
                <Link
                  to="getcourse"
                  className="text-white text-decoration-none"
                >
                  Add Course
                </Link>
              </Button>
              <Stack spacing={4} direction="row" className="mx-2" role="button">
                <Badge badgeContent={cartItem.list.length} color="secondary">
                  <Link to="cart">
                    <ShoppingCartIcon />
                  </Link>
                </Badge>
              </Stack>
              <Badge badgeContent={4} color="primary" role="button">
                <Link to="inbox">
                  <NotificationsIcon color="" />
                </Link>
              </Badge>
              <Link to="profile">
                <Avatar
                  alt="Remy Sharp"
                  // src=''
                  src={user.photoURL}
                  className="ms-3"
                  role="button"
                />
              </Link>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open} className="drawerContantier">
          <DrawerHeader>
            <h3 className="pe-3 d-flex align-items-center">
              <CastForEducationIcon className="ms-2 me-2" /> Dashboard{" "}
            </h3>
            <IconButton onClick={handleDrawerClose}>
              {open ? <ChevronLeftIcon /> : <CastForEducationIcon />}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List
            component="nav"
            aria-label="main mailbox folders"
            className="ms-2"
          >
            {[
              "Dashboard",
              "Courses",
              "Event",
              "Inbox",
              "Assessment",
              "Resources",
              "Profile",
              "Help",
              "Setting",
              "",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                {index === 5 ? (
                  <div className="mt-4 ps-3 text-center">
                    {open ? (
                      <p className="w-100">Account Detail</p>
                    ) : (
                      <p className="pe-2">ACC</p>
                    )}
                    <Divider />
                  </div>
                ) : (
                  <div></div>
                )}

                {text === '' ? (
                  <div className="mt-2  ps-3 LogOutBtn position-absolute w-100 h-100 cursor-pointer" onClick={handleLogout}>
                    {open ? (
                      <p className="ps-1 pt-1"><LogoutIcon /> 
                      <span className="ps-4">Log Out</span></p>
                    ) : (
                      <p ><LogoutIcon /> </p>
                    )}
                    
                  </div>
                ) : (
                  <></>
                )}
                {index === 6 ? <div className=""></div> : <div></div>}
                {index === 7 ? (
                  <div className="mt-5 bg-dark"></div>
                ) : (
                  <div></div>
                )}

                <Link
                  to={
                    index === 0
                      ? "/dashboard"
                      : `/dashboard/${text.toLowerCase()}`
                  }
                  className="text-dark text-decoration-none"
                >
                  {" "}
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index === 0 ? <DashboardIcon /> : <></>}
                      {index === 1 ? (
                        <LocalLibraryIcon
                          aria-describedby={id}
                          variant="contained"
                          onClick={handlePopClick}
                        />
                      ) : (
                        <></>
                      )}
                      {index === 2 ? <CalendarMonthIcon /> : <></>}
                      {index === 3 ? <MailIcon /> : <></>}
                      {index === 4 ? <QuizIcon /> : <></>}
                      {index === 5 ? <LibraryBooksIcon /> : <></>}
                      {index === 6 ? <PersonIcon /> : <></>}
                      {index === 7 ? <LiveHelpIcon /> : <></>}
                      {index === 8 ? <SettingsIcon /> : <></>}
                      {index === 9 ? <></> : <></>}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />

                    {index == 1 ? (
                      <div>
                        <div
                          aria-describedby={id}
                          variant="contained"
                          onClick={handlePopClick}
                        >
                          {open ? (
                            <>
                              {pop ? (
                                <ExpandLess className="w-100 " />
                              ) : (
                                <ExpandMore className="w-100 " />
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        <Popover
                          id={id}
                          open={pop}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          className="pt-3 rounded"
                        >
                          <div className="pt-3 rounded">
                            <h5 className="ps-5 rounded">Course List</h5>

                            {dropdown.map((drop, key) => {
                              return (<Typography sx={{ p: 1 }}>
                                <button className="btn w-100 btn-outline-secondary">
                                {drop.getCart[0].titel.slice(0, 25)}
                                </button>
                              </Typography>
                                // <Typography href="#/action-1" key={key}>
                                //   <Link
                                //     to="courses"
                                //     className="text-warning py-2 text-decoration-none btn btn-secondary w-100"
                                //   >
                                //     {drop.getCart[0].titel.slice(0, 25)}
                                //   </Link>
                                // </Typography>
                              );
                            })}

                            <Typography sx={{ p: 1 }}>
                              <button className="btn btn-secondary w-100">
                                Add More Course
                              </button>
                            </Typography>
                          </div>
                        </Popover>
                      </div>
                    ) : (
                      <></>
                    )}
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, px: 3, pt: 1 }}
          className="w-100  outletContainer"
        >
          <DrawerHeader />

          {/* the main component the can be routed */}
          <Outlet />
          <Footer className='fixed-bottom'/>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
