import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form"

function Login({setDisable}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
      <dialog id="my_modal_3" className=" modal ">
        <div className="modal-box flex flex-wrap justify-center dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            {/* <button onClick={setDisable} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
            <Link to="" onClick={setDisable} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
            <h3 className=" text-4xl mb-12 mt-4">Login</h3>
            <div className='flex mx-2 flex-wrap '>
                <div className='font-bold w-full ml-1'>USERNAME</div>
                <label className="mt-2 mb-6  bg-gray-100 input rounded-full w-full flex items-center gap-2" htmlFor="">
                    <input type="email" 
                    {...register("email", { required: true })}
                    className='w-full text-lg text-black' placeholder='Username' />
                </label>
                    <br />
                    {errors.email && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                <div className='font-bold w-full ml-1'>PASSWORD</div>
                <label className="mt-2 mb-6 bg-gray-100 input w-full rounded-full flex items-center gap-2" htmlFor="">
                    <input type="password" 
                    {...register("password", { required: true })}
                    className='w-full text-lg text-black' placeholder='Password' />
                </label>
                    <br />
                    {errors.password && <span className='text-sm ml-auto text-red-500'>This field is required</span>}
                <button className='w-full my-4 text-lg btn btn-secondary rounded-full  h-12'>Login</button>
                <div className='w-full flex justify-center'><h1 className='text-lg'>Don't have an account? <Link to="/signup" className=' text-secondary cursor-pointer hover:underline'>Sign Up</Link></h1></div>
            </div>
          </form>
        </div>
      </dialog>
     </div> 
    </>
  )
}

export default Login
