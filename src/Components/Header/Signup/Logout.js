import {useContext, useEffect} from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { useCookies} from 'react-cookie';
import { UserContext } from "../../Context/useContext";

export default function Logout(){
  let history = useHistory()
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const { setUser } = useContext(UserContext);

  const onSubmitHandler = async () => {

      await axios.get("/logout")
      .then(res => {
        console.log("successful!!!")
        localStorage.removeItem("LoggedUserId")
        removeCookie("user", {path: "/", maxAge: -1})
        setUser()
        history.push("/")
      })
      .catch(err => console.log(err)) 
    }

  


return (
  
    <>
    <Box color="white" ml={1} bgcolor="tomato" borderRadius="10px" fontWeight="bold" clone>
    <Button  variant="text" onClick={onSubmitHandler}>
      Logout
    </Button>
  </Box>
  </>
)

}

