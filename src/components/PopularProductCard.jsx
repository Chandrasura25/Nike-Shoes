import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex gap-2.5 justify-start mt-8">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5)</p>
      </div>
      <h3 className="">{name}</h3>
        <p className="font-palanquin font-bold text-lg">{price}</p>
    </div>
  );
};

export default PopularProductCard;
