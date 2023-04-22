import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const enterFormData = e => {
    console.log(e.target.id);
    console.log(e.target.value);
    setFormData(prevState => ({
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <main className='max-w-6xl mx-auto'>
      <h1 className='text-4xl text-center mt-5 font-bold'>Sign In</h1>
      <section className='flex justify-center flex-wrap items-center px-6 py-12 '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
            alt='hand holding a key chain with keys'
            className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%]'>
          <form className='lg:ml-20 w-full'>
            <input
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6'
              type='email'
              id='email'
              value={email}
              onChange={enterFormData}
              placeholder='Enter Email'
            />
            <div className='w-full relative mb-6'>
              <input
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={enterFormData}
                placeholder='Enter Password'
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  role='button'
                  aria-label='hide password'
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiFillEye
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  role='button'
                  aria-label='hide password'
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p>
                Don't have an account?{' '}
                <Link
                  to='/sign-up'
                  className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out'>
                  Register
                </Link>
              </p>
              <Link
                to='/forgot-password'
                className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>
                Forgot Password
              </Link>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>
              Sign In
            </button>
            <div className='w-full'>
              <p className='text-center font-semibold mx4 my-4 uppercase'>or</p>
            </div>
            <button className='w-full '></button>
          </form>
        </div>
      </section>
    </main>
  );
}
