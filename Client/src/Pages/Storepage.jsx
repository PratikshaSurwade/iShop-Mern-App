import { useLocation } from 'react-router-dom'

const Storepage = () => {
  const category = useLocation().pathname;
  const path = category.split("/")[2];
  console.log(category);

  
  return (
    <>
      <div className='bg-gray-300 w-full h-10 text-center '>Storepage  {path? `: ${path}` : `: ${path}`}</div>

      <div className=' font-bold mx-20 flex bg-red-400'>
        <div className='min-w-1/3 mt-5 h-screen bg-amber-200'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='min-w-2/3 h-screen mt-5 bg-blue-300'></div>
      </div>
    </>
  )
}

export default Storepage