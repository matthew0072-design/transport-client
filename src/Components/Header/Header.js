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
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles((theme) => ({
 
  root: {
    backgroundColor: "#423E92",
    width: "100%",
    flexGrow: 1,
    [theme.breakpoints.between('xs', 'sm')]:{
      
      border: "1px solid yellow",
      
      
      
    }
   
    

  },


  menu:{
    display: "none",
    
    [theme.breakpoints.between('xs', 'sm')]:{
      
      position: "fixed",
      top: "64px", // Adjust this value to align with your app's layout
      left: 0,
      width: "100%",
      backgroundColor: "#423E92",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      zIndex: 1000, // Ensure the menu is above other content
    },
  

  }, 
  
  deskDev: {
    [theme.breakpoints.between('xs', 'sm')]:{
      display: "none"
    }
  },

  avatar: {
    display: "flex",

    margin: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
    [theme.breakpoints.between('xs', 'sm')]:{
      display: "none"
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
      display: "none"
    }

  },


  toolBar: {
    [theme.breakpoints.between('xs', 'sm')]:{
      display: "flex",
      justifyContent: "0.1rem",
      border: "2px solid red",
      

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" className={classes.root}>
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
            BOOK
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
            
           
          {/* <Button onClick={() => setIsMenuOpen(true)} color="primary" className={classes.menu}><MenuIcon /></Button>
          
          {isMenuOpen && (<div>
            <Button className={classes.defaultColor} component={Link} to="/">
            HOME{" "}
          </Button>

          <Button className={classes.defaultColor} onClick={handleOpen}>
            BOOK
          </Button>

            {open && <Modal open={open} handleClose={handleClose} />}
          {/* <Modal/> */}
          {/* <About />
          <Button
            className={classes.defaultColor}
            component={Link}
            to="/contact"
          >
            CONTACT US
          </Button>
          {user ? (<Logout />)
          : (<Account />) }
          </div>) } */} 
          

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
