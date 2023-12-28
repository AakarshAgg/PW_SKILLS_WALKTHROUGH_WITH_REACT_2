import PropTypes from 'prop-types';

function SignUp({setDisplay}){
    return(
        <>
        <input type="text" placeholder='Mobile Number or Email' className='border-2 p-2 w-80 '/>
<input type="text" placeholder='Full Name' className='border-2 p-2 w-80 '/><br/>
        <input type="text" placeholder='Phone number,username,or email' className='border-2 p-2 w-80 '/>
<input type="password" placeholder='password' className='border-2 p-2 w-80 '/><br/>
<button className='bg-sky-500 text-white p-1 w-80 font-bold my-2' type='submit'>Sign Up</button>
<div className='flex py-2 justify-center'><p>Have an account?</p><p className='text-blue-600 cursor-pointer px-2' onClick={()=>setDisplay(true)}>Log In</p></div>
    </>
    )
}

SignUp.propTypes = {
    setDisplay: PropTypes.func.isRequired,
  };

export default SignUp