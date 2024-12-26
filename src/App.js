import React from 'react';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
     <h1>User Mangement</h1>
     <Register/>
     <Login/>
    </div>
  );
}

export default App;
