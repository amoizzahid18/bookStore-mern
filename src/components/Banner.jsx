import React, { useEffect } from 'react'

 function Banner() {

  return (
    <>
        <div className="max-w-screen-2xl container mx-auto py-20     md:px-10  px-10 flex flex-col-reverse  md:flex-row ">
            <div className='w-full mr-4 mt-12 md:w-1/2 md:mt-32'>
                <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Hello, welcome here to learn something 
                <span className='text-pink-500'> new everyday!!!</span>
                </h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore sint veniam consequuntur repellat possimus commodi architecto, eius rem quas similique velit libero odit aperiam rerum quaerat assumenda dolorem! Error!</p>
                <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text"  className="text-black grow" placeholder="Email" />
                </label>
                </div> 
                <button className="mt-8 text-lg btn btn-secondary">More about us</button>  
            </div>
            <div className="w-full md:w-1/2  ">
                <div  className="w-100 h-100 dark:bg-slate-900"> 
                    <img  className="w-92 h-92 rounded-xl" src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1713809197~exp=1713812797~hmac=0cf379b6f5ca82494fbefbac76c2479364cb03b397e2b51c520f105e0cfc1910&w=996" alt="" />
                </div>
            </div>
        </div> 
    </>
  )
 }
export default Banner
