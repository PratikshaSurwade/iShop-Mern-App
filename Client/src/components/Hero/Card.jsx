import React from 'react'

const Card = () => {
  return (
    <div className='h-50 w-35 border-5 border-gray-300 flex flex-col flex-nowrap items-center justify-around'>
        <img src='./images/storepage/11.png' className='w-full h-2/4' alt='Product Image' />
        <h3>Title2</h3>
        <div className='w-full flex justify-around'><p className='itallic'>2000$</p><p className='del'>3000$</p></div>
        <div>

        </div>
    </div>
  )
}

export default Card