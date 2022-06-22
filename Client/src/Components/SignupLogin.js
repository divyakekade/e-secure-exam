import React from "react";
import axios from 'axios';
import { createRoutesFromChildren, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import OptionBoxBlue from "./OptionBoxBlue";
import OptionBoxWhite from "./OptionBoxWhite";
import BlueButton from "./BlueButton";
import "./SignupLogin.css";
export default function SignUpLogin({role}){
    // console.log(role);
    let navigate=useNavigate()
    const [formData1,setFormData1]=React.useState({
        "name":"",
        "prn":"",
        "email":"",
        "mobile":"",
        "password":""
    })
    const [formData2,setFormData2]=React.useState({
        "email":"",
        "password":""
    })
    function handleChangeS(e){
        const newFormData1={...formData1}
        newFormData1[e.target.id]=e.target.value
        setFormData1(newFormData1)
        // console.log(newFormData1)
    }
    function handleChangeL(e){
        const newFormData2={...formData2}
        newFormData2[e.target.id]=e.target.value
        setFormData2(newFormData2)
        // console.log(newFormData2)
    }
    async function Signup(e){
    e.preventDefault();
    console.log("Posted Data");
    const data = {
        name:formData1.name,
        email:formData1.email,
        password:formData1.password,
        phoneNumber:formData1.mobile
    }
    if(role==="Student"){
        try{
            data.prn = formData1.prn;
            const res = await axios
            .post(`http://localhost:5000/api/v1/studentsignup`,{
                data
                
            })
            // window.location.replace('/studentdashboard');
            navigate(`/studentdashboard/${role}`,{state:role});
            // res.data&&navigate("http://localhost:3000/studentdashboard");
        }catch(error){
            console.log(error);
        }
    }
    else{
        try{
            const res = await axios
            .post(`http://localhost:5000/api/v1/faculty/signup`,{
              data
             
            })
            navigate(`/facultydashboard/${role}`,{state:role});
            // res.data && navigate("http://localhost:3000/facultydashboard")
        }catch(error){
            console.log(error);
        } 
    } 

    }

    //Login
    async function Login(e){
        e.preventDefault();
        const data2 = {
            
            email:formData2.email,
            password:formData2.password,
            
        }
        console.log(data2);
        if(role==="Student"){
            try{
                
                const res = await axios
                .post(`http://localhost:5000/api/v1/studentlogin`,{
                    data2      
                })
                navigate(`/studentdashboard/${role}`,{state:role});
                // res.data&&navigate("http://localhost:3000/studentdashboard");
            }catch(error){
                console.log(error);
            }
        }
        else{
            try{
                const res = await axios
                .post(`http://localhost:5000/api/v1/faculty/login`,{
                data2
                
                })
                navigate(`/facultydashboard/${role}`,{state:role});
                // res.data && navigate("http://localhost:3000/facultydashboard")
            }catch(error){
                console.log("There is a error please handle it"+error);
            } 
        } 

    
    
}
    // function submitData() {
    //     // const article = { title: 'React POST Request Example' };
    //     axios.post('https://reqres.in/invalid-url', formData1)
    //         .then(response => console.log(response))
    //         .catch(error => {
    //             this.setState({ errorMessage: error.message });
    //             console.error('There was an error!', error);
    //         });
    // }
    const [choice,setChoice]=React.useState("Sign up")
    function toggleToLogin(){
        setChoice("Log in")
    }
    function toggleToSignup(){
        setChoice("Sign up")
    }
    if(choice==="Sign up"){
        if(role==="Student"){
    return(
        <>
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div><OptionBoxBlue name="Sign up"/></div>
                </span>
                <span onClick={toggleToLogin}>
                    <div><OptionBoxWhite name="Log in"/></div>
                </span>
            </div>
            <form className="form">
            <input type="text" id="name" onChange={(e)=>handleChangeS(e)} placeholder="name" className="login-input"></input>
            <input type="text" id="prn" onChange={(e)=>handleChangeS(e)} placeholder="PRN" className="login-input"></input>
            <input type="email" id="email" onChange={(e)=>handleChangeS(e)} placeholder="email" className="login-input"></input>
            <input type="text" id="mobile" onChange={(e)=>handleChangeS(e)} placeholder="mobile number" className="login-input"></input>
            <input type="password" id="password" onChange={(e)=>handleChangeS(e)} placeholder="password" className="login-input"></input>
           <button className="signup-button" onClick={Signup} type="submit">Sign up</button>
            </form>
        </div>
        </>
    )}
    else if(role==="Faculty")
    return(
        <>
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div><OptionBoxBlue name="Sign up"/></div>
                </span>
                <span onClick={toggleToLogin}>
                    <div><OptionBoxWhite name="Log in"/></div>
                </span>
            </div>
            <form className="form">
            <input type="text" id="name" onChange={(e)=>handleChangeS(e)} placeholder="name" className="login-input"></input>
            <input type="email" id="email" onChange={(e)=>handleChangeS(e)} placeholder="email" className="login-input"></input>
            <input type="text" id="mobile" onChange={(e)=>handleChangeS(e)} placeholder="mobile number" className="login-input"></input>
            <input type="password" id="password" onChange={(e)=>handleChangeS(e)} placeholder="password" className="login-input"></input>
            <button className="signup-button" onClick={Signup} type="submit">Sign up</button>
            </form>
        </div>
        </>
    )
}
    else
    {
       return(
        <>
        <div className="component-box">
        <div className="options-box">
            <span>
                <div onClick={toggleToSignup}><OptionBoxWhite name="Sign up"/></div>
            </span>
            <span>
                <div><OptionBoxBlue name="Log in"/></div>
            </span>
        </div>
        <form className="form">
        <input type="text" id="email" onChange={(e)=>handleChangeL(e)} placeholder="email" className="login-input"></input>
        <input type="password" id="password" onChange={(e)=>handleChangeL(e)} placeholder="password" className="login-input"></input>
        <Link to={role==="Faculty"?"/facultydashboard":"/studentdashboard"} state={{role:{role}}}><button className="signup-button" onClick={Login} type="submit">Log in</button></Link>
        </form>
        <a href="" className="forgot-pasword">Forgot Password?</a>
    </div>
    </>
       )
    }
}