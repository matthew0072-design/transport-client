import Typography from "@material-ui/core/Typography";
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../HomeBook/HomeFooter";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "lavender",
    color: "gray",
    fontWeight: "bold",
  },

  formComplaint: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(5),
    height: 500,
    width: "100%",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "90%",
      flexDirection:"column",
      height: "auto"
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

  paperForm: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(10),
    width: 550,
    height: 400,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "95%",
      height: "auto"
      
    }
  },

  contactBtn: {
    marginTop: theme.spacing(2),
    color: "white",
    fontWeight: "bold",
    marginLeft: theme.spacing(20),
    width: "30%",
    backgroundColor: "tomato",
    borderRadius: "30px",

    [theme.breakpoints.between('xs', 'sm')]: {
      width: "70%",
      marginLeft: theme.spacing(5)
      
    },

    "&:hover": {
      backgroundColor: "red",
    },
  },

  overallContactSide: {
    marginTop: theme.spacing(7),
    width: 350,
    height: 300,
    [theme.breakpoints.between('xs', 'sm')]: {
      height: "auto",
      marginBottom: "2rem",
      marginTop: theme.spacing(1)
    }
  },

  contactSide: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.between('xs', 'sm')]: {
      justifyContent: "space-around"
    }
  },

  ring: {
    marginTop: theme.spacing(10),
    position: "relative",
    left: "-2rem",
    [theme.breakpoints.between('xs', 'sm')]: {
      left: "0",
      marginTop: theme.spacing(4)
      
    }
  },

  locationIcon: {
    marginTop: theme.spacing(10),
  },
}));

export default function Contact() {
  const { control, register, handleSubmit, reset } = useForm();
  const classes = useStyles();
  const options = ["Suggestion", "Enquiry", "Complaint"];

  const onSubmitHandler = (data) => {
    
    axios
      .post("http://localhost:5000/contact", data)
      .then((response) =>{
        console.log(response.data)
        
        
        
      })
      .catch((error) => console.log(error));


  };

  return (
    <div className={classes.root}>
      <Header />
      <Box
        bgcolor="gray"
        color="white"
        mt={9}
        height={100}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" align="center">
          Contact Us
        </Typography>
      </Box>
      <Box
        bgcolor="inherit"
        color="black"
        width="100%"
        height={100}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" align="center">
          Send Us a Message
        </Typography>
      </Box>
      <Typography variant="h5" align="center">
        You can contact us with anything related to our Products. We'll get in
        touch with you as soon as possible.
      </Typography>
      <div className={classes.formComplaint}>
        <div>
          <Paper elevation={4} className={classes.paperForm}>
            <Box px={3} py={2}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <Box>
                    <Typography> Your Name </Typography>
                    <Controller
                      control={control}
                      name="name"
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          id="name"
                          size="small"
                          placeholder="Your Name..."
                          className={classes.itemGrid}
                          variant="outlined"
                          {...field}
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Typography>Email </Typography>
                    <Controller
                      control={control}
                      name="email"
                      rules={{ required: true }}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          placeholder="Email..."
                          id="email"
                          size="small"
                          variant="outlined"
                          type="email"
                          {...field}
                          className={classes.itemGrid}
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Typography> Number </Typography>
                    <Controller
                      control={control}
                      name="number"
                      rules={{ required: true }}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          id="number"
                          variant="outlined"
                          size="small"
                          placeholder="Your number"
                          {...field}
                          className={classes.itemGrid}
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Typography> Subject </Typography>
                    <Controller
                      control={control}
                      name="subject"
                      rules={{ required: true }}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          id="subject"
                          variant="outlined"
                          placeholder="Subject..."
                          size="small"
                          {...field}
                          className={classes.itemGrid}
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Typography> Type </Typography>
                    <Controller
                      control={control}
                      defaultValue=""
                      name="type"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          variant="outlined"
                          size="small"
                          className={`${classes.select} ${classes.itemGrid}`}
                          {...field}
                        >
                          <MenuItem value="suggestion"> Suggestion </MenuItem>
                          <MenuItem value="enquiry"> Enquiry</MenuItem>
                          <MenuItem value="complaint">Complaint</MenuItem>
                        </Select>
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box>
                    <Typography> Message</Typography>
                    <Controller
                      control={control}
                      defaultValue=""
                      name="message"
                      render={({ field }) => (
                        <TextField
                          id="message"
                          placeholder="Message"
                          className={classes.itemGrid}
                          {...field}
                          rows={2}
                          multiline
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box className={classes.contactBtn} clone>
                <Button
                  variant="contained"
                  align="center"
                  onClick={handleSubmit(onSubmitHandler)}
                >
                  Contact us
                </Button>
              </Box>
            </Box>
          </Paper>
        </div>
        <div className={classes.overallContactSide}>
          <div className={classes.contactSide}>
            <div>
              <LocationOnOutlinedIcon />
            </div>
            <div>
              <Typography variant="h5"  color="primary">
                Find us at the office
              </Typography>
              <Typography variant="body1">
                Room No 8-12 <br /> Lautech Senate building <br /> Ogbomoso,{" "}
                <br /> Oyo State,
                <br /> Nigeria.
              </Typography>
            </div>
          </div>
          <div className={classes.contactSide}>
            <div className={classes.locationIcon}>
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className={classes.ring}>
              <Typography variant="h5" color="primary">
                {" "}
                Give us a ring
              </Typography>
              <Typography variant="body1">
                Customer Care:
                <em> +2347007322362</em>
                <br />
                Enquiry: +2348160696670 <br />
                Complaint: +2347050958242 <br />
                Monday - Sunday 8:00AM - 10:00PM
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
