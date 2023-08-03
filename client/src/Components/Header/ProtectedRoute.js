import {useContext} from "react"
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from "../Context/useContext";
import Loading from "../Utility/Loading"; 


export default function ProtectedRoute(props) {   
    const { user, isLoading} = useContext(UserContext); 
    

    const { component: Component,
        ...rest } = props;

      if(isLoading) {
         return <Loading/>
         }

      if(user){
        return ( <Route {...rest} render={(props) => (<Component {...props}/>)}/>)
        } else {
          return <Redirect to='/login'/> 
        }

}
