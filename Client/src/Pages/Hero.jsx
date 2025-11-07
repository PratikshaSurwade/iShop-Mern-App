import Card from "../components/Hero/Card"

const Hero = () => {
  return (
    <>
      <div className="h-96  w-screen flex flex-col items-center justify-center gap-4 mt-30">
        <h1> BEST SELLER</h1>
        <div className='flex gap-10'>
          <p className="cursor-pointer">All</p>
          <p className="cursor-pointer">Mac</p>
          <p className="cursor-pointer">iPhone</p>
          <p className="cursor-pointer">iPad</p>
          <p className="cursor-pointer">Accessories</p>
        </div>
        <div className="flex gap-10 flex-wrap px-100 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Hero