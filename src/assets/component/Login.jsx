import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

 const data = {
    Email: "",
    Password: "",
  };
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
    setState(data);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-400'>
        <div className='flex w-[800px] h-[500px] shadow-lg rounded-lg overflow-hidden bg-white'>

        <div className=' bg-gray-900 text-white flex  items-center'>
      <img src="./src/assets/about.avif" alt="register" className='w-[400px] h-[600px] object-cover' />
      </div>

      <div className=' flex flex-col items-center ml-10 mt- gap-14'>
      <h1 className='text-4xl font-extrabold'>WELCOMEBACK</h1>
       <h1 className='text-3xl '>Login</h1>

      <form 
    onSubmit={handleSubmit}
   className='flex flex-col gap-4   '
    >

     
   <input 
   onChange={handleOnChange}
   value={state.Email}
   type="text"
    name="Email" 
    placeholder='Enter the Email'
    required
    className='border-1 w-80 h-10 rounded-2xl'
   />
     <input 
   onChange={handleOnChange}
   value={state.Password}
   type="password"
    name="Password" 
    placeholder='Enter the password'
    required
    className='border-1 w-80 h-10 rounded-2xl'
     />
     <button type="submit" className='w-30 h-10 bg-blue-400 text-white rounded-3xl hover:bg-blue-500 ml-24 mt-4'>Sumbit</button>

    </form>
     <div className='flex'>
<Link to="/register" className=' mr-32 hover:underline hover: active:text-blue-400'>Register</Link>
<Link to="/register" className='ml-10 hover:underline '>Forget Password?</Link>
</div>
      </div>
     
      </div>
    </div>
  )
}

export default Login

