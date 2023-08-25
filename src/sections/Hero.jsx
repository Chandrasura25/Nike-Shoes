import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 pt-28 max-xl:padding-x flex flex-col justify-center items-start w-full">
        <p className="">Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>Shoes
        </h1>
        <p className="">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Show now" iconURL={arrowRight} />
      </div>
    </section>
  )
}

export default Hero