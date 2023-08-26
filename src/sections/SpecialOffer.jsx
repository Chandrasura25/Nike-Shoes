import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container justify-wrap">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bol lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your lifestyle, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
