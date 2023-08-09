import { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { UserContext } from "../Context/useContext";
import Logistics from "./Logistics";
import Account from "./Account";
import Modal from "./Steppers/Modal";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Avatar from "@material-ui/core/Avatar";
import Image from "../../assets/download.jpg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Logout from "./Signup/Logout"
import IconButton  from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles((theme) => ({
 
  root: {
    backgroundColor: "blue",
    width: "100%",
    flexGrow: 1,

   
        

  },


  appBar: {
    backgroundColor: "blue",
    width: "100%",
    flexGrow: 1,

    [theme.breakpoints.between('xs', 'sm')]: {
      display: "none"
    }
        

  },


  

  mobile: {
    display: "none",

    [theme.breakpoints.between('xs', 'sm')]: {

      display: "flex",
    alignItems: "center",
    }
    
    

  },
  avatar: {
    display: "flex",

    margin: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
    [theme.breakpoints.between('xs', 'sm')]:{
      height: "1.25rem",
      width: "1.25rem",
      
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    display: "flex",

    [theme.breakpoints.between('xs', 'sm')]:{
      fontSize: "1rem",
      fontWeight: "bolder"
    }

  },


  toolBar: {
    [theme.breakpoints.between('xs', 'sm')]:{
      display: "flex",
      justifyContent: "0.1rem",
      border: "2px solid red",
      

    }
  },

  isMobileOpen: {

    display: "none",

    [theme.breakpoints.between('xs', 'sm')]: {
      display: "flex",
      flexDirection: "column"
    }
    
  },

  buttonItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },

  defaultColor: {
    color: "white",
    fontWeight: "lighter",
   
  },
}));



const Header = () => {
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
<AppBar position="fixed" className={classes.appBar}>
<Toolbar  >

    <Avatar
    variant="square"
    alt="Remy Sharp"
    src={Image}
    className={classes.avatar}
  />
  <Typography variant="h6" className={classes.title} color="secondary">
    LMTS
  </Typography>
  <Button className={classes.defaultColor} component={Link} to="/">
    HOME{" "}
  </Button>

  <Button className={classes.defaultColor} onClick={handleOpen}>
    BOOKING
  </Button>

  {open && <Modal open={open} handleClose={handleClose} />}
  {/* <Modal/> */}
  <About />
  <Button
    className={classes.defaultColor}
    component={Link}
    to="/contact"
  >
    CONTACT US
  </Button>
  {user ? (<Logout />)
  : (<Account />) }
    
</Toolbar>
</AppBar>
     
      <div className={classes.mobile}>
        <Avatar
            variant="square"
            alt="Remy Sharp"
            src={Image}
            className={classes.avatar}
        />
        <Typography variant="h6" className={classes.title} color="secondary">
          LMTS
        </Typography>
        <IconButton onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <MenuIcon color="secondary"  />
        </IconButton>
      </div>
      
      
     { isMobileOpen && (
      <div className={classes.isMobileOpen}>
        <Button className={classes.defaultColor} component={Link} to="/">
    HOME{" "}
  </Button>

  <Button className={classes.defaultColor} onClick={handleOpen}>
    BOOKING
  </Button>

  {open && <Modal open={open} handleClose={handleClose} />}

  <About />
  <Button
    className={classes.defaultColor}
    component={Link}
    to="/contact"
  >
    CONTACT US
  </Button>
  {user ? (<Logout />)
  : (<Account />) }
      </div>
     )} 

    </div>
  );
};
export default Header;
