import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F77F00",
    height: 400,
    color: "white",
    [theme.breakpoints.between('xs', 'md')]: {
        height: 600,
        alignItems: "start"

    }
    
  },

lmts: {
  width: 900,
  // border: "3px solid blue",
  textAlign: "left",
  height: 300,

  [theme.breakpoints.between('xs', 'md')]:{
    width: 300,
    textAlign: "center",
    
    
    


  },
},

safe: {
  margin: theme.spacing(5),
  display: "flex",
  justifyContent: "space-around",
  alignItems: "space-around",

  [theme.breakpoints.between('xs', 'md')]:{
    display: "flex",
    flexDirection: "column",
  
    gap: "8px"

  }
  
},

flexItem: {
  width: 200,
  
  //border: "3px solid red"
},

typoColor: {
  color: "blue",
  fontWeight: 600,
},
  
}));

const HomeInfo = () => {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <div className={classes.lmts}> 
      <Typography variant="h5" align="center" className={classes.typoColor}> Why LMTS?</Typography>
<Typography> The Motorcycle or Okada Industry has been an informal industry 
  for a long time. The lack of proper regulations and professionalism gave rise to that.
   LMTS plans to restructure this informal industry by providing tested, trusted and safe 
   transportation for everyone  
</Typography>
<div className={classes.safe}> 
  <div className={classes.flexItem}>
<Typography variant="h5" align="center" className={classes.typoColor}>Safe</Typography>
<Typography>Ride with trained, trusted and verified riders, each equipped with 
  a hairnet and helmet just for you 
</Typography>
</div>
<div className={classes.flexItem}>
<Typography variant="h5" align="center" className={classes.typoColor}>Fair</Typography>
<Typography>Prices so fair, there is no need to haggle</Typography>
</div>
<div className={classes.flexItem}>
<Typography variant="h5" align="center" className={classes.typoColor}>Convenient </Typography>
<Typography>Easy to use. A trusted rider is just a click away</Typography>
</div>
</div>
</div>
    </div>
  );
};

export default HomeInfo;
