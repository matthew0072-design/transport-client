import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(to right, coral, darkslateblue)",
    display: "flex",
    height: "20rem",
    width: "100%",
    color: "white",
    fontWeight: "bolder",
    justifyContent: "space-around",
    alignItems: "center",
  },
  form: {
    background: "white",
    borderRadius: "1rem",
    height: "4.5rem",
  },
  text: {
    marginTop: "2rem",
  },
  button: {
    background: "coral",
    borderRadius: "50px",
    color: "white",
    marginTop: "1.5rem",
    marginLeft: "2rem",
    "&:hover": {
      background: "chocolate",
    },
  },
}));

const HomeVerify = () => {
  const classes = useStyles();
  const [verify, setVerify] = useState("");
  const [track, setTrack] = useState("");
  const onChangeHandler = (e) => {
    setVerify(e.target.value);
  };

  const onChangeTrackHandler = (e) => {
    setTrack(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.verify}>
        <Typography variant="h5">Verify Booking</Typography>
        <Typography>
          Check your booking status using the 10 digit verification code.
        </Typography>
        <form className={classes.form}>
          <TextField
            className={classes.text}
            placeholder="Verification Code..."
            value={verify}
            onChange={onChangeHandler}
          />
          <Button variant="contained" className={classes.button}>
            <SearchOutlinedIcon />
            Verify
          </Button>
        </form>
      </div>
      <div className={classes.tracking}>
        <Typography variant="h5">Track Shipment</Typography>
        <Typography>
          Track your shipment using the 10 digit verification code.
        </Typography>
        <form className={classes.form}>
          <TextField
            className={classes.text}
            placeholder="Tracking Code..."
            value={track}
            onChange={onChangeTrackHandler}
          />
          <Button variant="contained" className={classes.button}>
            <LocationOnOutlinedIcon /> Track
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HomeVerify;
