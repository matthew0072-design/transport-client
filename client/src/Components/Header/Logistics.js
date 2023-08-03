import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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

const Logistics = () => {
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
        <LocalShippingOutlinedIcon />
        LOGISTICS
        <ArrowDropDownIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem>
          <div className={classes.buttonItem}>
            <Button className={classes.buttonItem}> Pickup </Button>
            <Button> Tracking </Button>
            <Button> Shipments </Button>
            <Button> Travel History </Button>
            <Button> Terminals </Button>
            <Button> Agents</Button>
            <Button> Partners</Button>
          </div>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default Logistics;
