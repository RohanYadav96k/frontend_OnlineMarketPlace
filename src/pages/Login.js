import React, { useState } from 'react'
import loginIcons from '../asset/signin.gif'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  console.log('data login', data)
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            {<img src={loginIcons} alt="login icons" />}
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                ></input>
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="enter password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                ></input>
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>

              <Link
                to={'/forgot-password'}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot Password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>

          <p className="my-5">
            Don't have account ?{' '}
            <Link
              to={'/sign-up'}
              className="text-red-600 hover: text-red-700 hover:underline"
            >
              Sign up{' '}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, AlertCircle } from 'lucide-react';
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';
// import { useAuth } from '../hooks/useAuth';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login, loading } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }

//     const success = await login(email, password);

//     if (success) {
//       navigate('/');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
//           Sign in to your account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Or{' '}
//           <Link to="/signup" className="font-medium text-primary-500 hover:text-primary-600">
//             create a new account
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {error && (
//             <div className="mb-4 p-3 bg-error-50 border border-error-200 rounded-md text-error-700 flex items-start">
//               <AlertCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
//               <span>{error}</span>
//             </div>
//           )}

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <Input
//               label="Email address"
//               type="email"
//               autoComplete="email"
//               required
//               fullWidth
//               leftIcon={<Mail size={18} className="text-gray-400" />}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <Input
//               label="Password"
//               type="password"
//               autoComplete="current-password"
//               required
//               fullWidth
//               leftIcon={<Lock size={18} className="text-gray-400" />}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link to="/forgot-password" className="font-medium text-primary-500 hover:text-primary-600">
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>

//             <Button type="submit" fullWidth isLoading={loading}>
//               Sign in
//             </Button>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <Button variant="outline" fullWidth>
//                 Google
//               </Button>
//               <Button variant="outline" fullWidth>
//                 Facebook
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
