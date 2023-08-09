import Typography from "@material-ui/core/Typography";
import HomeFooter from "../HomeBook/HomeFooter";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
  root: {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    
  },


  about: {
    color: "black",
    
    fontWeight: "bolder",
    width: "100%",
    height: "5rem",
    fontStyle: "italic",
    marginTop: theme.spacing(11),
    textAlign: "center",
    [theme.breakpoints.between('xs', 'sm')]: {
      background: "tomato",
      height: "4rem"
    }
  },

  
  

  lmts: {
    
    textAlign: "center",
    
    width: "70%",
    height: "15rem",

    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "0.5rem",
      // border: "2px solid red",
      height: "auto",
      textAlign: "left",
      width: "90%",
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },

  mission: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "linear-gradient(to right, coral, darkslateblue)",
    height: "20rem",
    width: "100%",

    [theme.breakpoints.between('xs','sm' )]: {
      width: "90%",
      flexDirection: "column",
      
      height: "20rem",
      padding: theme.spacing(2)
    }
  },

  flexMission: {
    border: "1px solid white",
    color: "white",
    padding: theme.spacing(5),
    textAlign: "center",
    width: 400,
    height: 100,

    [theme.breakpoints.between('xs','sm' )]: {
      width: 300,
      padding: theme.spacing(1),
      border: "none"
    }
  },

  belief: {
    width: "70%",
    height: 250,
    color: "black",
    lineHeight: "40px",
    textAlign: "center",
    padding: theme.spacing(10),

    [theme.breakpoints.between('xs','sm' )]: {
      padding: theme.spacing(2),
      height: "auto",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textAlign: "center",
      width: "90%"

    }
  },

  
}));

export default function Aboutus() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.about}>
        <Typography variant="h3"> About us </Typography>
      </div>
     
      <div className={classes.lmts}>
        <Typography variant="h6">
          LMTS is a Trusted Name in Transportation for 20 Years and counting.
          LMTS provides transportation 
          services for intercity/interstate travelers in Nigeria. LMTS customers
          can enjoy air conditioned vehicles 
          and light entertainment. LMTS offers you the unique
          service to hire a bus that will 
          take you to anywhere in Nigeria, following your desired journey plan,
          schedule and duration at a very affordable price. 
          LMTS also provides haulage services for businesses and individuals
          looking to 
          transport large goods and services or materials within and around
          Nigerian cities.
        </Typography>
      </div>
      <div className={classes.mission}>
        <div className={classes.flexMission}>
          <Typography variant="h4"> Our Mission</Typography>
          <Typography variant="body1">
            "Our mission is to provide an affordable and reliable transport
            system for our People."
          </Typography>
        </div>
        <div className={classes.flexMission}>
          <Typography variant="h4">Our Vision</Typography>
          <Typography variant="body1" color="initial">
            "Our Vision is to use all available resources to become the largest
            and most efficient road transport corporation world over."
          </Typography>
        </div>
      </div>
      <div className={classes.belief}>
        <Typography variant="h4" color="initial">
          Our Belief 
        </Typography>
        <Typography variant="h6" color="initial">
          Hence, our belief is that our growth from two bikes to two hundred
          bikes in fourteen years without 
          any outside help is made possible by God who for His own reasons chose
          to use us for this miracle. To God be the
          Glory LMTS group started from a humble beginning back in 2020
          with two  bikes. Commenced business as a Transport
          company, LMTS which has  now transformed
          to be one of University´s leading Transport Service Company, conveying
          about 3,000 passengers daily.
        </Typography>
      </div>
      <HomeFooter />
    </div>
  );
}
