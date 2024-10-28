import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
import Login from './Login'

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

    return (
    <div className="w-screen h-screen  flex justify-center items-center">
            <div id="my_modal" className='modal-box dark:bg-slate-800 dark:text-white'>
                <div className=" flex flex-wrap justify-center">
                    <form onSubmit={handleSubmit(onSubmit)}  method="div">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        
                        <h3 className=" text-4xl mb-12 mt-4">Contact Us</h3>
                        <div className='flex mx-2 items-center flex-wrap '>
                            <div className='font-bold w-full ml-1'>NAME</div>
                            <label className="mt-2 mb-6 bg-gray-100 input rounded-full w-full flex items-center gap-2" htmlFor="">
                                <input type="text"  className='w-full text-lg text-black' 
                                {...register("name", { required: true })}
                                placeholder='Full Name' />
                            </label>
                            <br />
                            {errors.name && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                            <div className='font-bold w-full ml-1'>EMAIL</div>
                            <label className="mt-2 mb-6 bg-gray-100 input rounded-full w-full flex items-center gap-2" htmlFor="">
                                <input type="email" className='w-full text-lg text-black'
                                {...register("email", { required: true })}
                                placeholder='Email' />
                            </label>
                            <br />
                            {errors.email && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                            <div className='font-bold w-full ml-1'>SUBJECT</div>
                            <label className="mt-2 mb-6 bg-gray-100 input w-full rounded-full flex items-center gap-2" htmlFor="">
                                <input type="text" className='w-full text-lg text-black'
                                {...register("subject", { required: true })}
                                placeholder='Subject' />
                            </label>
                            <br />
                            {errors.subject && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                            <div className='font-bold w-full ml-1'>MESSAGE</div>
                            <textarea className="textarea bg-gray-100 text-lg w-full mt-2 mb-6 text-black  rounded-3xl textarea-bordered" 
                            {...register("message", { required: true })}
                            placeholder="Message"></textarea>
                            <br />
                            {errors.message && <span className='text-sm  ml-auto text-red-500'>This field is required</span>}
                            <button  className='w-full my-4 text-lg btn btn-secondary rounded-full  h-12'>Send</button>
                        </div>
                    </form>
                            
                </div>
            </div>
    </div>
  )
}

export default ContactForm
