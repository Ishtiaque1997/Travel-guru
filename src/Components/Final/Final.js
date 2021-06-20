import React, { useContext } from 'react';
import { UserContext } from '../../App';
import happy from '../../Screenshot/Search.png'
const Final = () => {
 const[loggedInUser,setLoggedInUser]=useContext(UserContext);
 return (
  <div className="congrats"style={{height:'800px'}}>
   <h1 style={{marginLeft:'70px',color:'white'}}>All the best for your travel </h1>
   <br/>
   <img style={{marginLeft:'30px', width:'900px'}}src={happy}/>
  </div>
 );
};

export default Final;