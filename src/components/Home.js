import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleLogin=()=>{
    navigate("/login");
  }
  const handleRegister=()=>{
    navigate("/register");
  }
  return (
    <div className="App">
      <h1>User Mangement</h1>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <button onClick={handleRegister}>Register</button>
      </div>

    </div>
  );
}

export default Home;
