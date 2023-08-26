import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="">
          <Button label="Sign Up"/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
