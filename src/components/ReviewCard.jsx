import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="">{feedback}</p>
      <div className="">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-coral-red">({rating})</p>
      </div>
        <h3 className="text-coral-red">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
