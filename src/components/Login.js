import React,{useState} from 'react';
import { loginUser } from '../services/api';
import axios from 'axios';

export const Login =()=>{
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
            // const response = await axios({
            //     method:"POST",
            //     url:"http://localhost:5000/api/users/login",
            //     data:formData
            // });
            const response = await loginUser(formData);
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