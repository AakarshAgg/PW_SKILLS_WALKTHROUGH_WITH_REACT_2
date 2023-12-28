import PropTypes from 'prop-types';

function LoginForm({setDisplay}){
    return (
        <>
            <input type="text" placeholder='Phone number,username,or email' className='border-2 p-2 w-80 '/>
    <input type="password" placeholder='password' className='border-2 p-2 w-80 '/><br/>
    <button className='bg-sky-500 text-white p-1 w-80 font-bold my-2' type='submit'>Sign in</button>
    <div className='flex py-4 justify-center'><p>Don&apos;t have an account?</p><a className='text-blue-600 cursor-pointer px-2' onClick={()=>setDisplay(false)} >Sign Up</a></div>
        </>
    )
}

LoginForm.propTypes = {
    setDisplay: PropTypes.func.isRequired
  };


export default LoginForm