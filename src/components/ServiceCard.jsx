const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex sm:w-[350px] w-full rounded-[20px] sm:min-w-[350px] shadow-3xl px-10 py-16">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-palanquin leading-normal font-bold text-3xl mt-5">{label}</h3>
      <p className="mt-3 break-words">{subtext}</p>
    </div>
  )
}

export default ServiceCard