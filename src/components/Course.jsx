import React from 'react'
import list from "../../src/list.json"
import Card from "./Card"
import {Link} from "react-router-dom"

function Course() {
    const filterData = list.filter((data) => data.category != "Free");
  return (
    <>
      <div className='max-w-screen-2xl container pt-10 mx-auto'>
        <div className='items-center pt-28 justify-center text-center'>
            <h1 className='text-2xl font-bold md:text-4xl'>We are delighted to have you
            <span className='text-pink-500'> Here! :)</span>
            </h1>
            <p className='mt-12 mx-12 sm:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eveniet, laboriosam repudiandae dolor temporibus assumenda obcaecati animi magni voluptatum, exercitationem iste expedita minus id, inventore ut error qui eaque nemo! Eos voluptates repellat repudiandae dolor consequatur ut, impedit odit officia numquam praesentium provident? Libero illum quae labore! Nisi, architecto reprehenderit.</p>
            <Link to = "/">
                <button className="mt-8 text-lg btn btn-secondary"><a href="/">Back</a></button>  
            </Link>
        </div>
        <div  className='flex justify-center flex-wrap '>
            {
                filterData.map((item) => 
                   <div className='mx-4'> <Card key = {item.id} item = {item} /> </div>
                )
            }
        </div>
      </div>
    </>
  )
}

export default Course
