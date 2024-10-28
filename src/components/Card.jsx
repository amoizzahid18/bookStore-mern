import React from 'react'

function Card({item}) {
  return (
    <>
    <div className='flex justify-center'>
      <div className="card h-72 md:h-80 lg:h-96 2xl:h-auto w-80 bg-base-100 dark:bg-slate-900 dark:border dark:shadow-slate-800 dark:text-white shadow-xl my-5 cursor-pointer hover:scale-105 duration-200">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body h-36 lg:h-44">
            <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
            <div className="px-1 lg:px-2 lg:py-1 rounded-full border-2 border-slate-400">${item.price}</div> 
            <div className="px-1 lg:px-2 lg:py-1 rounded-full border-2 border-slate-400 cursor-pointer hover:bg-secondary duration-200 hover:text-white">Buy Now</div>
            </div>  
        </div>
      
      </div>
    </div>
    </>    

  )
}

export default Card
