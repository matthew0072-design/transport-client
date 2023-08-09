import { useState } from "react";
import Slider from "react-slick";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../Header/Steppers/Modal";
import Image from "../../assets/bike6.jpg"

import Image1 from "../../assets/img1.jpg";
import Image2 from "../../assets/img2.jpg";
import Image3 from "../../assets/img6.jpg";
import Image4 from "../../assets/img7.jpg";
import Image5 from "../../assets/img8.jpg";
import Image6 from "../../assets/img9.jpg";
import Image7 from "../../assets/img13.jpg";
import Image8 from "../../assets/img15.jpg";
import Image9 from "../../assets/img16.jpg";
import Image10 from "../../assets/img17.jpg";
import Image11 from "../../assets/img19.jpg";
import Image12 from "../../assets/img21.jpg";
import Image13 from "../../assets/img22.jpg";
import Image14 from "../../assets/img23.jpg";
import Image15 from "../../assets/img24.jpg";
import Image16 from "../../assets/img25.jpg";
import Image17 from "../../assets/img26.jpg";
import Image18 from "../../assets/img28.jpg";
import Image19 from "../../assets/img32.jpg";






const useStyles = makeStyles((theme) => ({
  root: {
  
    textAlign: "right",
    width: "100%",
    height: 600,
    position: "relative",
    
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 400
    }
  },

  typo: {
    
    color: "white",
    fontSize: "2.5rem",
    textAlign: "center",
    margin: "1.5rem",
    fontWeight: 700,
    zIndex: 1,

    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "1.8rem",
      margin: "0.5rem",
      textAlign: "center"
    }
  },

  buttonItem: {
    color: "white",
    backgroundColor: "tomato",
    fontSize: "1.5rem",

    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "1.2rem",
      textAlign: "left"

    },
    
    "&:hover": {
      backgroundColor: "red",
    },
  },
  
  LogImage: {
    width: "50%",
    height: "20rem",
  },

  realImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  LogDesc: {
    
    width: "100%",
    height: 400,
    position: "absolute",
    textAlign: "center",
    top: "6rem",
    
  },

  image: {
    height:600,
    width: "100%",
    objectFit: "cover",
    opacity: 0.8,
    
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 400
    }
  },

  dimDiv: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 600,
    width: "100%",
    backgroundColor: `rgba(0,0,0,.6)`,
    zIndex: 0,

    [theme.breakpoints.between('xs', 'sm')]: {
      height: 400
    }

  }
}));


const HomeBook = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    easing: "linear",
    fade: true,
    speed: 5000,
    slideToShow: 1,
    slideToScroll: 1,
  };

  return (
    <div className={classes.root}>
    
    
    
   <div>
   <div className={classes.dimDiv}></div>
   <Slider {...settings}>
   
   <div>
          <img src={Image1} className={classes.image} />
        </div>
        <div>
          <img src={Image2} className={classes.image} />
        </div>
        <div>
          <img src={Image3} className={classes.image} />
        </div>
        <div>
          <img src={Image4} className={classes.image} />
        </div>
        <div>
          <img src={Image5} className={classes.image} />
        </div>
        
        <div>
          <img src={Image6} className={classes.image} />
        </div>
        
        <div>
          <img src={Image7} className={classes.image} />
        </div>
        <div>
          <img src={Image8} className={classes.image} />
        </div> 
        <div>
          <img src={Image9} className={classes.image} />
        </div> 
        
        <div>
          <img src={Image11} className={classes.image} />
        </div> 
        <div>
          <img src={Image12} className={classes.image} />
        </div> 
        <div>
          <img src={Image13} className={classes.image} />
        </div> 
        <div>
          <img src={Image14} className={classes.image} />
        </div> 
        <div>
          <img src={Image15} className={classes.image} />
        </div> 
        <div>
          <img src={Image16} className={classes.image} />
        </div> 
        <div>
          <img src={Image17} className={classes.image} />
        </div> 
        <div>
          <img src={Image18} className={classes.image} />
        </div> 
        <div>
          <img src={Image19} className={classes.image} />
        </div> 
         
         
        </Slider>
        </div>
       <div className={classes.LogDesc}>
        
        <Typography variant="h5" className={classes.typo}>
          LAUTECH Transport <span style={{ color: "red" }}>Service</span>
        </Typography>
        <Typography variant="h5" className={classes.typo}>
          {" "}
          Making Transportation Fast and Safe
        </Typography>

        <Button
          variant="contained"
          className={classes.buttonItem}
          onClick={handleOpen}
        >
          {" "}
          Book now{" "}
        </Button>
        {open && <Modal open={open} handleClose={handleClose} />}
      </div> 
       
    </div>
  );
};

export default HomeBook;
