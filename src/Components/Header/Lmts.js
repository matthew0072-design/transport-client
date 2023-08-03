import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DepartureBoardOutlinedIcon from "@material-ui/icons/DepartureBoardOutlined";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Modal from "@material-ui/core/Modal";
import SimpleModal from "../Header/Steppers/Modal";

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

const Lmts = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.buttonItem}>
        <Modal>
          <SimpleModal open={open} handleClose={handleClose} />
        </Modal>
      </div>
    </Fragment>
  );
};
export default Lmts;
