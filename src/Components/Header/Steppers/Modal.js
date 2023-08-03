import { useContext, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RouteForm  from "./routeForm";
import Modal from "@material-ui/core/Modal";
import {Redirect} from "react-router-dom"
import Button from "@material-ui/core/Button"
import { UserContext } from "../../Context/useContext";


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid tomato",
    boxShadow: theme.shadows[24],
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
  },
}));

export default function SimpleModal({open, handleClose}) {
  const classes = useStyles();
  
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      {user ?
       (<Modal  open={open} onClose={handleClose}>
        <div className={classes.paper} >
          <RouteForm />
        </div>
      </Modal>) : (<Redirect to='/login'/> )} 
      
    </Fragment>
  );
}
