import {useState, useContext} from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles";
import {useCookies} from "react-cookie";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { UserContext } from "../../Context/useContext"; 
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router-dom"
import { useForm, Controller } from "react-hook-form";
import axios from "axios"


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 600,
    
    
  },

  selectEmpty: {
    marginTop: theme.spacing(1),
    width: 300,

    [theme.breakpoints.between('xs', 'sm')]: {
      width: 220,
    }
  },

  selectControl: {
    display: "flex",
    justifyContent: "space-around",

    
    
  },
}));

const RouteForm = () => {
  let history = useHistory()

  
  const [value, setValue] = useState(null)
  const classes = useStyles();
  const { control, handleSubmit, reset } = useForm();
  const { setUser } = useContext(UserContext);  
  const [cookies, setCookie] = useCookies(["bookedId"])

const setUserContext = async () => {
  return await axios.get('/user').then(res => {         
      setUser(res.data.currentUser);  
                           
      }).catch((err) => {
      console.log(err)
  })
}

const createCookie = (id) => {
  setCookie("bookedId", id, {path: "/"})
}

const onSubmitHandler = (data) => {
  
  
  data.bookedUser = localStorage.getItem('LoggedUserId')
  console.log("BOOK DATA: ",data)


  axios.post("http://localhost:5000/booking", data)
  .then(response => {
    setUserContext()
    
    let bookedId = response.data.bookedId;
    console.log(response);
    createCookie(bookedId)
 history.push("/payment")    
})
  .catch(error => console.log(error))
  

}



  return (
    
  <div>
    <Grid container spacing={1}>
    <Grid item xs={12} sm={12}>
        <Box>
            <Typography variant="h6" color="primary">
              {" "}
              From
            </Typography> 
            </Box>
            <Box>
                    
                    <Controller
                      control={control}
                      defaultValue=""
                      className={classes.selectControl}
                      name="from"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          variant="outlined"
                          className={classes.selectEmpty}
                          size="small"
                          {...field}
                        >

                          <MenuItem value="underg"> Under G </MenuItem>
                          <MenuItem value="adenike"> Adenike</MenuItem>
                          <MenuItem value="stadium"> Stadium</MenuItem>
                          <MenuItem value="aroje"> Aroje </MenuItem>
                          <MenuItem value="Yoaco"> Yoaco</MenuItem>
                          <MenuItem value="General"> General </MenuItem>
                        </Select>
                      )}
                    />
                  </Box>
      
    </Grid>
       
      <Grid item xs={12} sm={6}>
      <Box>
            <Typography variant="h6" color="primary">
              {" "}
              To
            </Typography>
            </Box>
            
                    <Controller
                      control={control}
                      defaultValue=""
                      name="to"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          variant="outlined"
                          className={classes.selectEmpty}
                          size="small"
                          
                          {...field}
                        >
                          <MenuItem value="underg"> Under G </MenuItem>
                          <MenuItem value="adenike"> Adenike</MenuItem>
                          <MenuItem value="stadium"> Stadium</MenuItem>
                          <MenuItem value="aroje"> Aroje </MenuItem>
                          <MenuItem value="Yoaco"> Yoaco</MenuItem>
                          <MenuItem value="General"> General </MenuItem>
                        </Select>
                      )}
                    />
                  
        </Grid>
        </Grid>
        <Box   sx={{
        mt:1,
        ml: 7,
        bgcolor: 'tomato',
        color: "white",
        align: "center",
        '&:hover': {
          backgroundColor: 'red',
          opacity: [0.9, 0.8, 0.7],
        },
      }} clone >
                <Button
                  variant="contained"
                  align="center"
                  onClick={handleSubmit(onSubmitHandler)}
                >
                  Submit
                </Button>
                
              </Box>
              
    </div>
  
  );
};

export default RouteForm;
