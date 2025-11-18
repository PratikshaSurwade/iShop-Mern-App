import Card from "../components/Hero/Card"
import Subnavbar from "../components/Hero/Subnavbar"

const Hero = () => {
  return (
    <>
      <div className="min-h-fit bg-amber-200  w-screen flex flex-col items-center justify-center gap-4 mt-30">
        <h1> BEST SELLER</h1>
        <Subnavbar />
        <div className="flex gap-10 flex-wrap px-100 ">
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