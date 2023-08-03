import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "../../assets/download.jpg";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Modal from "../Header/Steppers/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    display: "flex",
    width: "100%",
    paddingLeft: theme.spacing(10),

    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: "column",
      paddingLeft:theme.spacing(2)
    }
  },
  avatar: {
    margin: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  typograph: {
    display: "flex",
    
    
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "40%",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "80%",
      
    }
  },

  lmts: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    marginRight: "5rem",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "80%"
    }
  },
}));

const HomeFooter = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.lmts}>
        <div className={classes.typograph}>
          <div>
            <Avatar
              variant="square"
              alt="Remy Sharp"
              src={Image}
              className={classes.avatar}
            />
          </div>
          <div>
            <Typography
              variant="h6"
              color="primary"
              style={{
                marginTop: "1.5rem",
              }}
            >
              LMTS
            </Typography>
          </div>
        </div>
        <Typography color="secondary">
          Our mission is to provide an affordable and reliable transport system
          for our people, using all available resources efficiently.
        </Typography>
      </div>
      <div className={classes.footer}>
        <Typography variant="h6" color="primary">
          {" "}
          Lmts{" "}
        </Typography>
        <Button color="secondary" component={Link} to="/">
          {" "}
          HOME{" "}
        </Button>
        <Button color="secondary" component={Link} to="/about">
          ABOUT US
        </Button>
        <Button color="secondary" component={Link} to="/contact">
          CONTACT US
        </Button>
      </div>
      <div className={classes.footer}>
        <Typography variant="h6" color="primary">
          {" "}
          Transport{" "}
        </Typography>
        <Button color="secondary" onClick={handleOpen}>
          {" "}
          BOOKING{" "}
        </Button>
        {open && <Modal open={open} handleClose={handleClose} />}
        <Button color="secondary" component={Link} to="/terms">
          TERMS & CONDITIONS
        </Button>
        <Button color="secondary" component={Link} to="/privacy">
          PRIVACY POLICY
        </Button>
      </div>
    </div>
  );
};

export default HomeFooter;
