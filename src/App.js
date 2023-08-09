import "./App.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import { UserContext } from "./Components/Context/useContext";
import Home from "./Components/Home/Home";
import { useState, useEffect, CSSProperties } from 'react';
import Signup from "./Components/Header/Signup/Signup";
import Login from "./Components/Header/Signup/Login";
import Aboutus from "./Components/About/Aboutus";
import Privacy from "./Components/Footer/Privacy";
import Terms from "./Components/Footer/Terms";
import Faq from "./Components/About/Faq";
import UserDriver from "./Components/Header/Signup/userDriver";
import DriverSignUp from "./Components/Header/Signup/Driver";
import { library } from "@fortawesome/fontawesome-svg-core";
import useFindUser from "./Components/Header/Signup/FindUSer";
import ProtectedRoute from "./Components/Header/ProtectedRoute";
import PaymentForm from "./Components/Header/Steppers/paymentForm";
import BounceLoader from "react-spinners/BounceLoader"


import {
  faPhone,
  faUser,
  faEnvelope,
  faKey,
  faUserPlus,
  faKeyboard,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPhone,
  faUser,
  faKey,
  faEnvelope,
  faUserPlus,
  faKeyboard,
  faListUl
);


const override: CSSProperties = {
  margin: '0 auto'
}


function App() {
  const [userLoading, setUserLoading] = useState(true)
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF7F50",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  

  useEffect(() => {
    setTimeout(() => {
      setUserLoading(false); // Set isLoading to false after loading
    }, 5000); // Simulate loading for 2 seconds
  }, []);



  const { 
    user, 
    setUser, 
    isLoading} = useFindUser();


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, isLoading}}>

      { 
      userLoading ? (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}} >
            <BounceLoader 
              size={150}
              data-testid="loader"
              loading={userLoading}
              cssOverride={override}
              color="tomato"
          
          />

        
          
        </div>
          
      ): (
        <Switch>
        <Route path="/register-user" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/user-driver" component={UserDriver} />
        <Route path="/register-driver" component={DriverSignUp} />
        <ProtectedRoute path="/contact" exact component={Contact} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/payment" component={PaymentForm} />
        <Route path="/about" component={Aboutus} />
        <Route path="/faq" component={Faq} />
        <Route path="/" exact component={Home} />
      </Switch>
      )
      }
        
        </UserContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
