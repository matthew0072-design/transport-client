import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttonItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1),
  },
  defaultColor: {
    color: "white",
    fontWeight: "light",
  },
}));

const About = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const onOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        onClick={onOpen}
        aria-controls="customized-menu"
        aria-haspopup="true"
        className={classes.defaultColor}
      >
        ABOUT
        <ArrowDropDownIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button component={Link} to="/about">
              {" "}
              About us{" "}
            </Button>
            <Button component={Link} to="/faq">
              {" "}
              FAQ{" "}
            </Button>
          </div>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default About;
