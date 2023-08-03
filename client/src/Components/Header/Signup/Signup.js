import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {useHistory} from "react-router-dom";
import { UserContext } from "../../Context/useContext"; 
import Paper from "@material-ui/core/Paper";
import {useCookies} from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Image from "../../../assets/download.jpg";
import Grid from "@material-ui/core/Grid";
import Loading from "../../Utility/Loading"
import Typography from "@material-ui/core/Typography";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import Avatar from "@material-ui/core/Avatar";
import HomeFooter from "../../HomeBook/HomeFooter";
import Select from "@material-ui/core/Select";
import { useStore } from "../../Store/store";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
  },

  avatar: {
    margin: "auto",
    height: theme.spacing(19),
    width: theme.spacing(14),

    [theme.breakpoints.between('xs','sm' )]: {
      width: theme.spacing(8),
      height: theme.spacing(10)
    }
  },

  register: {
    [theme.breakpoints.between('xs','sm' )]: {
      fontSize: "1.5rem",
      fontWeight: "bold"
    }
  },

  formPaper: {
    marginTop: theme.spacing(15),
    width: 600,
    height: "100%",
    marginBottom: theme.spacing(10),

    [theme.breakpoints.between('xs','sm' )]: {
      width: "90%",
      
    }
  },

  itemGrid: {
    width: "100%",
    [`& fieldset`]: {
      borderRadius: 50,
    },
  },

  select: {
    margin: theme.spacing(1),
    width: 250,
  },

  registerBtn: {
    marginTop: theme.spacing(3),
    backgroundColor: "tomato",
    color: "white",
    textAlign: "center",
    width: "30%",
    height: 50,
    fontWeight: "bold",
    borderRadius: "30px",
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(10),

    [theme.breakpoints.between('xs','sm' )]: {
      width: "50%",
      marginLeft: theme.spacing(15)
    },

    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
    let history = useHistory();
    const { setUser } = useContext(UserContext);

  const validationSchema = yup.object().shape({
    Surname: yup.string().required("surname is required"),
    otherNames: yup
      .string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

 

const [cookies, setCookie] = useCookies(["user"])

const registerUser =  (data) => {
  console.log({data})
  axios
    .post("http://localhost:5000/register-user", data)
    .then(async (response) => {
      console.log(response);
      let loggedUserId = response.data.loggedUserId;
        localStorage.setItem('LoggedUserId',loggedUserId)
      createCookie(response.data.token)
      await setUserContext();

      history.push("/")
    })
    .catch((error) => {
      console.log(error);
    });
}

const createCookie = (token) => {
  setCookie("user", token, {path: "/"})
}


const setUserContext = async () => {
  return await axios.get('/user')
  .then(res => {         
      setUser(res.data.currentUser);  
                          
      }).catch((err) => {
    
      console.log(err)
  })
}


  return (
    <div className={classes.root}>
      <Header />
      <Paper className={classes.formPaper} elevation={4}>
        <Box px={3} py={2}>
          <Typography
            variant="h3"
            align="center"
            margin="dense"
            color="primary"
            fontWeight="bolder"
            className={classes.register}
          >
            Register
          </Typography>
          <Box>
            <Avatar
              variant="rounded"
              alt="Remy Sharp"
              src={Image}
              className={classes.avatar}
            />
          </Box>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Box>
                {" "}
                <Typography>Surname</Typography>
                <Controller
                  defaultValue=""
                  name="Surname"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="Surname"
                      variant="outlined"
                      className={classes.itemGrid}
                      {...field}
                      placeholder="Surname"
                      margin="dense"
                    />
                  )}
                  error={errors.Surname ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.Surname?.message}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                {" "}
                <Typography>Other Names</Typography>
                <Controller
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  name="otherNames"
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      id="otherNames"
                      className={classes.itemGrid}
                      placeholder="Other names"
                      margin="dense"
                      {...field}
                    />
                  )}
                  error={errors.otherNames ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.otherNames?.message}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                {" "}
                <Typography> Gender </Typography>
                <Controller
                  control={control}
                  defaultValue=""
                  name="gender"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      variant="outlined"
                      className={classes.itemGrid}
                      {...field}
                    >
                      <MenuItem value="male"> Male </MenuItem>
                      <MenuItem value="female"> Female</MenuItem>
                    </Select>
                  )}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                {" "}
                <Typography>Phone</Typography>
                <Controller
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  name="phone"
                  render={({ field }) => (
                    <TextField
                      type="number"
                      variant="outlined"
                      className={classes.itemGrid}
                      id="phone"
                      placeholder="Phone"
                      margin="dense"
                      {...field}
                    />
                  )}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box>
                {" "}
                <Typography>Email</Typography>
                <Controller
                  control={control}
                  defaultValue=""
                  name="email"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      id="email"
                      placeholder="Email"
                      type="email"
                      fullWidth
                      {...field}
                      margin="dense"
                      variant="outlined"
                      className={classes.itemGrid}
                    />
                  )}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box>
                {" "}
                <Typography>Password</Typography>
                <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      id="password"
                      placeholder="Password..."
                      type="password"
                      fullWidth
                      {...field}
                      margin="dense"
                      variant="outlined"
                      className={classes.itemGrid}
                    />
                  )}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box>
                {" "}
                <Typography>Confirmed Password</Typography>
                <Controller
                  control={control}
                  name="confirmPassword"
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      type="password"
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      className={classes.itemGrid}
                    />
                  )}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.confirmPassword?.message}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box align="center">
                <FormControlLabel
                  control={
                    <Controller
                      control={control}
                      name="acceptTerms"
                      defaultValue={false}
                      inputRef={register()}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          color="primary"
                          //onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                  }
                  label={
                    <Typography
                      color={errors.acceptTerms ? "error" : "inherit"}
                      
                    >
                      I have read and agree to the Terms *
                    </Typography>
                  }
                />
                <br />
                <Typography variant="inherit" color="textSecondary">
                  {errors.acceptTerms
                    ? "(" + errors.acceptTerms.message + ")"
                    : ""}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box clone>
            <Button
              variant="contained"
              onClick={handleSubmit(registerUser)}
              className={classes.registerBtn}
            >
              <FontAwesomeIcon icon="user-plus" size="lg" /> Register
            </Button>
          </Box>
        </Box>
      </Paper>
      <HomeFooter />
    </div>
  );
};

export default Signup;
