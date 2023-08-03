import {useState, useEffect} from "react";
import Modal from "@material-ui/core/Modal"
import { UserContext } from "../../Context/useContext"; 
import Box from "@material-ui/core/Box";
import { PaystackButton } from 'react-paystack';
import {useHistory} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles";
import Header from "../Header"
import HomeFooter from "../../HomeBook/HomeFooter"
import Image from "../../../assets/bike6.jpg"
import axios from "axios";
const useStyles = makeStyles(theme => ({

root: {
    

    
    height: 500,
    width: "100vw",
    
    marginTop: theme.spacing(8),
    backgroundPosition: "center center",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
},


    box: {  
        marginTop: "10rem",
        marginBottom: "10rem",
        marginLeft: "32rem",
        marginRight: "32rem",
        position: "relative",
    color: "white",
    width: 300,
    height: 100,
    backgroundColor: "tomato",
    fontSize: "2rem",
    borderRadius: "2rem",
    border: "none",
    outline: "none",

    "&:hover": {
        backgroundColor: "red",
        cursor: "pointer"
      },
},

dimDiv: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 465,
    width: "100%",
    backgroundColor: `rgba(0,0,0,.3)`,
    zIndex: 0,

  }

}))



const PUBLIC_KEY = "pk_test_86c6d47772a9557bd9bee8b2347935b9a889458c";
const AMOUNT = 10000;

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "faggymatt007@gmail.com",
        amount:AMOUNT,
        publicKey:PUBLIC_KEY,
      };


const PaymentForm = () => {

    let history = useHistory()
    //const { setUser } = useContext(UserContext); 
    const [book, setBook] = useState("")

    // const setUserContext = async () => {
    //   return await axios.get('/user').then(res => {         
    //       const id = setUser(res.data.currentUser);  
    //         console.log(id)  
    //       }).catch((err) => {
    //       console.log(err)
    //   })
    // }
     


      const handlePaystackSuccessAction = () => {
       //console.log(reference);
       
       // setUserContext()
       useEffect(() => {

         async function getBooking() {
          await axios.get(`http://localhost:5000/getBooking`)
          .then(res => {
            setBook(res.data.booking)
            history.push('/')
          } 
         )
         .catch(err => console.log(err))
         }
          getBooking()

       }, [])
         
      
      };
    
      const handlePaystackCloseAction = () => {
        
        console.log('closed')
      }
    
    
      const componentProps = {
        ...config,
        text: 'Make Payment',
        onSuccess: handlePaystackSuccessAction,
        onClose: handlePaystackCloseAction,
    };

    const [open, setOpen] = useState(false);
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    return(
        
        <div className={classes.root}>
            <div className={classes.dimDiv}></div>
            <Header/>
        
            <Box className={classes.box} clone>
            <PaystackButton {...componentProps} /> 
            </Box>
        
        
        
<HomeFooter/>
        </div>
    )
}

export default PaymentForm;