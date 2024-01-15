import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex m-20">
      <div className="p-10 w-1/2">
        <h1 className="font-bold font-sans text-5xl">
          Experience the Best Maid Services in Gated Communities.
        </h1>
        <h5 className=" mt-10">
          Our professional maids provide top-quality cleaning and cooking
          services exclusively for the residents of gated communities. Discover
          the convince and luxury of a pristine home without lifting a finger.
        </h5>
        <div className="mt-10 justify-between ">
          <button>Google play</button>
          <button className="ml-5">App Store</button>
        </div>
      </div>
      <div className="p-20 ml-20">Video gif</div>
    </div>
  );
};

export default Hero;
