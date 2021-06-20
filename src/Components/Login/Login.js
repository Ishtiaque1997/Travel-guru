import React from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
import {useState}from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import {initializeLoginFramework,handleGoogleSignIn,handleSignOut, resetPassword} from './loginManager';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from './loginManager'


function Login() {
  const[newUser,setNewUser]=useState(false);
   const formStyle={
    backgroundColor:'white',
    borderRadius:'20px',
    width:'300px',
    height:'350px',
    borderColor:'orange',
    marginLeft:'560px'
  }
 const[user,setUser]=useState({
   isSignedIn:false,
   name:'',
   email:'',
   password:'',
   photo:''
 })

initializeLoginFramework();

  const[loggedInUser,setLoggedInUser]=useContext(UserContext);
const history=useHistory();
const location=useLocation();
let { from } = location.state || { from: { pathname: "/" } };

const googleSignIn=()=>{
 handleGoogleSignIn()
 .then(res=>{
  handleResponse(res,true)
 })
}

const signOut=()=>{
 handleSignOut()
 .then(res=>{
  handleResponse(res,false)
 })

}
const handleResponse=(res,redirect)=>{
 setUser(res);
  setLoggedInUser(res);
  if(redirect){
 history.replace(from)
  }
 
}
 

 

 

const handleBlur=(e)=>{
  let isFieldValid=true;
  if(e.target.name=='email'){
    isFieldValid=/\S+@\S+\.\S+/.test(e.target.value);
    
  }
  if(e.target.name=='password'){
    const isPasswordValid= e.target.value.length>6 
    const passwordHasNumber=/\d{1}/.test(e.target.value);
    isFieldValid=isPasswordValid && passwordHasNumber;
  }
  if(isFieldValid){
    const newUserInfo={...user};
    newUserInfo[e.target.name]=e.target.value;
    setUser(newUserInfo);
  }
}

const handleSubmit=(e)=>{
 if(newUser&& user.email && user.password){
  createUserWithEmailAndPassword(user.name,user.email,user.password)
   .then(res=>{
   handleResponse(res,true)
  
   })
 }
 if(!newUser && user.email &&user.password){
   signInWithEmailAndPassword(user.email,user.password)
   .then(res=>{
    handleResponse(res,true)

   })
 }
 e.preventDefault();
}

  return (
    <div style={{backgroundImage:'../../Image/Rectangle 26.png',height:'800px'}}>
     
   
     <br/>
     

     {
       user.isSignedIn && <div>
         <p>Welcome, {user.name}</p>
         <p>Your email: {user.email}</p>
         <img src={user.photo}alt=""/>
     </div>
     }
     
     

    
    
    <input type="checkbox"onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
    <label htmlFor="newUser"style={{color:'white'}}>New user Sign up</label>
    <Form style={formStyle}>
      <h6>Create an account</h6>
                <Form.Group controlId="formBasicEmail">
                  
                  <Form.Control type="email" style={{backgroundColor:'white',width:'280px',marginTop:'5px',marginLeft:'10px'}} placeholder="First name" />
                  <br/>
                  <Form.Control type="email" style={{backgroundColor:'white',width:'280px',marginTop:'5px',marginLeft:'10px'}}  placeholder="Last name" />
                  <br/>
                  <Form.Control type="email" style={{backgroundColor:'white',width:'280px',marginTop:'5px',marginLeft:'10px'}}  placeholder="Your email" />
                   <br/>
                  <Form.Control type="email" style={{backgroundColor:'white',width:'280px',marginTop:'5px',marginLeft:'10px'}}  placeholder="Your password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                   
                 </Form.Group>
                  
                 <br/>
                 <Button style={{width:'200px',marginLeft:'5px'}} variant="warning" type="submit">
                   Create account
                 </Button>
            </Form>
    <p style={{color:'red'}}>{user.error}</p>
    
    {
      user.success && 
      <p style={{color:'green'}}>User {newUser? 'created':'logged in' }successfully</p>
      
    }
    </div>
  );
}

export default Login;
