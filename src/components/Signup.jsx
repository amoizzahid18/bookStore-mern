import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import {useForm} from "react-hook-form"
import Navbar from './Navbar';

function Signup() {
    const [bg, setBg] = useState();
    const [fg, setFg] = useState();
    var modal = "modal-box"
    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
           setBg("dark:bg-slate-800")
           setFg("dark:text-white")
           console.log(localStorage.getItem("theme"))
        }
        else{
            setBg("");
            setFg("")
        }
    },[])
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
 
  return (
    <>
    
    <div className="w-screen h-screen  flex justify-center items-center">
            <div id="my_modal" className='modal-box dark:bg-slate-800 dark:text-white'>
                <div className=" flex flex-wrap justify-center">
                    <form onSubmit={handleSubmit(onSubmit)}  method="div">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        
                        <h3 className=" text-4xl mb-12 mt-4">Sign Up</h3>
                        <div className='flex mx-2 items-center flex-wrap '>
                            <div className='font-bold w-full ml-1'>NAME</div>
                            <label className="mt-2 mb-6 bg-gray-100 input rounded-full w-full flex items-center gap-2" htmlFor="">
                                <input type="text" className='w-full text-black'
                                {...register("name", { required: true })}
                                placeholder='Full Name' />
                            </label>
                            <br />
                            {errors.name && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                            <div className='font-bold w-full ml-1'>USERNAME</div>
                            <label className="mt-2 mb-6 bg-gray-100 input rounded-full w-full flex items-center gap-2" htmlFor="">
                                <input type="email" className='w-full text-black'
                                {...register("email", { required: true })}
                                placeholder='Username' />
                            </label>
                            <br />
                            {errors.email && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                            <div className='font-bold w-full ml-1'>PASSWORD</div>
                            <label className="mt-2 mb-6 bg-gray-100 input w-full rounded-full flex items-center gap-2" htmlFor="">
                                <input type="password" className='w-full text-black'
                                {...register("password", { required: true })}
                                placeholder='Password' />
                            </label>
                            <br />
                            {errors.password && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                            <button  className='w-full my-4 text-lg btn btn-secondary rounded-full  h-12'>Sign Up</button>
                        </div>
                    </form>
                            <div className='w-full flex justify-center'>
                                <h1 className='text-lg'>Already have an account? <Link  onClick={()=>  document.getElementById("my_modal_3").showModal()}  className='text-xl text-secondary cursor-pointer hover:underline'> Login</Link>
                                    <Login setDisable={()=>  document.getElementById("my_modal_3").close()
                                }/>
                                </h1>
                            </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Signup
