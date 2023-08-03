import { useState } from "react";
import HomeFooter from "../HomeBook/HomeFooter";
import TextField from "@material-ui/core/TextField";
import Header from "../Header/Header";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  frequent: {
    marginTop: theme.spacing(9),
    background: "gray",
    height: 150,
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    paddingTop: theme.spacing(5),

    [theme.breakpoints.between('xs','sm' )]: {
      height: "auto",
      fontSize: "1.5rem",
      paddingTop: theme.spacing(3)
    }
  },

  question: {
    background: "white",
    height: 120,
    textAlign: "center",
    fontWeight: "light",
    color: "black",
    paddingTop: theme.spacing(5),

    [theme.breakpoints.between('xs','sm' )]: {
      height: "auto",
      fontSize: "1.5rem",
      fontWeight: "bold"
    }
  },

  divText: {
    width: "100%",
    position: "relative",

    height: 120,

    [theme.breakpoints.between('xs','sm' )]: {
      height: "auto"
    }
  },

  fieldText: {
    borderColor: "red",
    width: "50rem",
    left: "20rem",
    padding: theme.spacing(1),

    [theme.breakpoints.between('xs','sm' )]: {
      width: "80%",
      left: "1rem"
    }
  },

  toggleTypography: {
    position: "relative",
    top: "-3rem",
    left: "22rem",
    border: "1px solid blue",
    padding: "1rem",
    color: "blue",
    width: "40rem",
    textAlign: "center",

    [theme.breakpoints.between('xs','sm' )]: {
      width: "80%",
      top: "0",
      left: "1rem",
      marginBottom: "0.5rem"
    }
  },
}));

function Faq() {
  const [info, setInfo] = useState(false);
  const [terminal, setTerminal] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Header />
      </div>

      <div>
        <Typography variant="h3" className={classes.frequent}>
          {" "}
          Frequently Asked Questions
        </Typography>
        <Typography variant="h4" color="initial" className={classes.question}>
          Questions & Answers
        </Typography>
      </div>
      <div className={classes.divText}>
        <TextField
          id="info"
          variant="outlined"
          placeholder="What is LMTS"
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            ),
          }}
          onClick={() => setInfo(!info)}
          className={classes.fieldText}
        />
      </div>
      {info && (
        <Typography
          variant="body1"
          color="initial"
          className={classes.toggleTypography}
        >
          " PeaceGroup is a parent company for the peace group of companies "
        </Typography>
      )}
      <div className={classes.divText}>
        <TextField
          id="terminals"
          placeholder="Where can i find Terminals"
          onClick={() => setTerminal(!terminal)}
          variant="outlined"
          disabled
          className={classes.fieldText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {terminal && (
        <Typography variant="body1" className={classes.toggleTypography}>
          " Anywhere around you "
        </Typography>
      )}
      <HomeFooter />
    </div>
  );
}

export default Faq;
