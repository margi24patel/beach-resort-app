import React from "react";
import Link from "@material-ui/core/Link";
import logo from "../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    fontSize: "30px",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    color: "#000",
    textDecoration: "none",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      //color: "#000",
      textDecoration: "none",
    },
  },
  menuList: {
    display: "flex",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography variant="h6" color="inherit">
          <Link className={classes.link} href="/" underline="none">
            Home
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="h6" color="inherit">
          <Link className={classes.link} href="/rooms" underline="none">
            Rooms
          </Link>
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Link href="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuList className={classes.menuList}>
              <MenuItem>
                <Typography variant="h6" color="inherit">
                  <Link href="/" className={classes.link} underline="none">
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="h6" color="inherit">
                  <Link href="/rooms" className={classes.link} underline="none">
                    Rooms
                  </Link>
                </Typography>
              </MenuItem>
            </MenuList>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              style={{ color: "#000" }}
              aria-label="open drawer"
              onClick={handleMobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};
export default NavBar;
