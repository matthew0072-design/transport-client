import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import Box from "@material-ui/core/Box";
import HomeFooter from "../../HomeBook/HomeFooter";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(50),
    marginBottom: theme.spacing(20),
    border: "2px solid blue",
    padding: theme.spacing(5),
    width: 400,
    color: "tomato",

    [theme.breakpoints.between('xs','sm' )]: {
      marginLeft: theme.spacing(1),
      width: "95%",
      padding: theme.spacing(2)
    }
  },

  
}));

const UserDriver = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Typography variant="h4">
          Sign up as{" "}
          <Box component="span">
            {" "}
            <Button component={Link} to="/register-user">
              User
            </Button>
          </Box>
          or{" "}
          <Box component="span">
            <Button component={Link} to="/register-driver">
              Driver
            </Button>
          </Box>
        </Typography>
      </div>
      <HomeFooter />
    </div>
  );
};

export default UserDriver;
