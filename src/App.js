import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Components/TopBar/TopBar';
import Venues from './Components/Venues/Venues';
import background from './Image/Rectangle 28.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import LocationDetails from './Components/LocationDetails/LocationDetails';
import Login from './Components/Login/Login';
import Final from './Components/Final/Final';
import { createContext } from 'react';
import {useState} from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext=createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
      <div className="parent">
      
      <TopBar></TopBar>
      <Router>
        
        <Switch>
          <Route path="/home">
             <Venues></Venues>
          </Route>
           <Route path="/login" >
             <Login></Login>
          </Route>
            <PrivateRoute path="/final">
             <Final/>
          </PrivateRoute>
          <Route path="/location/:locationName">
             <LocationDetails></LocationDetails>
          </Route>
         <Route exact path="/">
            <Venues></Venues>

          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
    
    </UserContext.Provider>
  );
}

export default App;
