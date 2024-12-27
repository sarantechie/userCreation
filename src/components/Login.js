import React,{useState} from 'react';
import { loginUser } from '../services/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login =()=>{
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })

    const [message,setMessage]=useState();

    const handleChange = (e) =>{
        e.preventDefault();
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            // const token = localStorage.getItem("authToken");
            // const response = await axios({
            //     method:"POST",
            //     url:"http://localhost:5000/api/users/login",
            //     data:formData
            //     headers:{
            //          Authorization:`Bearer ${token}`,
            //     }
            // });
            const response = await loginUser(formData);
            console.log("response",response.data.token);
            localStorage.setItem("authToken",response.data.token); 
            navigate("/dashboard");          
            setMessage(response.data.message)
        }catch(err){
            setMessage(err?.response?.data?.message || "Login Failed");
        }
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <input 
             type="email"
             name="email"
             placeholder='Email'
             value={formData.email}
             onChange={handleChange}
             required
            />

            <input
            type="password"
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            />

            <button type='submit'>Login</button>
            </form>
            {message&&<p>{message}</p>}
        </div>
    )
}