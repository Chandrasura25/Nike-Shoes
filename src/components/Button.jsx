const Button = ({ label, iconURL, backgroundColor, textColor, borderColor }) => {
  return (
    <button className="flex justify-center items-center gap-2 py-4 px-7 border font-montserrat text-lg leading-none text-white rounded-full bg-coral-red cursor-pointer border-coral-red">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arror right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
