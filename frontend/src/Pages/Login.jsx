import React, {useEffect, useState} from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData,SetFormData] = useState({
      username:"",
      password:"",
      email:""
    })
    const changeHandler = (e) =>{
      SetFormData({...formData,[e.target.name]:e.target.value})
    }

  const login = async () => {
    console.log("Login Function Executed",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    console.log(responseData);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      localStorage.setItem("username", responseData.username); 
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign In</h1>
        <div className="loginsignup-fields">
           <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email Address'/>
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Enter Your Password'/>
        </div>
         <button onClick={()=> login()}>Login</button>
         <p className="loginsign-login">Don't have an account? <Link to= '/signup'><span>Register here</span></Link></p>
        </div>
    </div>
  )
}
export default Login
