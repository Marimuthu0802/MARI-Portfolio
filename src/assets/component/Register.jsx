import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  

  const navigate = useNavigate();

 const data = { username:"", Email: "", Password: ""};
  const [state, setState] = useState(data);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    if(!data) return console.log("Please enter value")

    setState(data);

  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='flex w-[800px] h-[500px] shadow-lg rounded-lg overflow-hidden "'>

        <div className=' bg-gray-900 text-white flex  items-center'>
      <img src="./src/assets/about.avif" alt="register" className='w-[400px] h-[600px] object-cover' />
      </div>

      <div className=' flex flex-col items-center ml-10 mt- gap-14'>
      <h1 className='text-4xl font-extrabold'>WELCOME</h1>
       <h1 className='text-3xl '>Register</h1>

      <form 
    onSubmit={handleSubmit}
   className='flex flex-col gap-4 '
    >
  <input 
   onChange={handleOnChange}
   value={state.username}
   type="text"
    name="username" 
    placeholder='Enter the name'
    required
    className='border-1 w-80 h-10'
   />
     
   <input 
   onChange={handleOnChange}
   value={state.Email}
   type="text"
    name="Email" 
    placeholder='Enter the Email'
    required
    className='border-1 w-80 h-10'
   />
     <input 
   onChange={handleOnChange}
   value={state.Password}
   type="password"
    name="Password" 
    placeholder='Enter the password'
    required
    className='border-1 w-80 h-10'
     />
  <Link to="/login">  <button  type="submit"className='w-30 h-10 bg-blue-400 text-white rounded-3xl hover:bg-blue-500 ml-24 mt-4'>Sumbit</button>
  </Link> 
    </form>
      </div>
     
      </div>
    </div>
  )
}

export default Register
