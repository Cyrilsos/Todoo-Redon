const Plan = () => {
  return (
    <div className=" flex-auto justify-center">
      <div>
        <h3 className="justify-center flex">Our Best</h3>
        <h1 className="justify-center flex">Pricing Plans</h1>
      </div>

      <div className="flex justify-center">
        <button className="bg-orange-600 hover:bg-orange-500 inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md mt-10">
          Instant
        </button>
        <button className="bg-white hover:bg-orange-500 inline-flex items-center px-4 py-2 text-black text-sm font-medium rounded-md mt-10">
          Weekly
        </button>
        <button className="bg-white hover:bg-orange-500 inline-flex items-center px-4 py-2 text-black text-sm font-medium rounded-md mt-10">
          Monthly
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex-auto bg-white text-black border-black w-1/5 ml-20 mr-10 text-center rounded-lg ">
          <h1 className="mb-3 font-bold text-l mt-10">Heading X</h1>
          <p>Duration: x Min/day</p>
          <p>For X&X bhk</p>
          <p>Upto 3 member family</p>
          <p>Utensils & Kitchen cleaning</p>
          <p>Washing Cupons</p>
          <p>Steam Cleaning</p>
          <p className="mt-3 mb-3">
            Within allocated time, you use the maid to perform do any work
            except cooking, cleaning bathrooms and risky areas.{" "}
          </p>
          <p>
            <a className=" text-orange-500 ">Terms and conditions</a>
          </p>
          <button className="p-5">Book Now</button>
        </div>
        <div className="flex-auto bg-white text-black border-black w-1/5 ml-20 mr-10 text-center rounded-lg">
          <h1 className="mb-3 font-bold text-l mt-10">Heading X</h1>
          <p>Duration: x Min/day</p>
          <p>For X&X bhk</p>
          <p>Upto 3 member family</p>
          <p>Utensils & Kitchen cleaning</p>
          <p>Washing Cupons</p>
          <p>Steam Cleaning</p>
          <p className="mt-3 mb-3">
            Within allocated time, you use the maid to perform do any work
            except cooking, cleaning bathrooms and risky areas.{" "}
          </p>
          <p>
            <a className=" text-orange-500 ">Terms and conditions</a>
          </p>
          <button className="p-5">Book Now</button>
        </div>
        <div className="flex-auto bg-white text-black border-black w-1/5 ml-20 mr-10 text-center rounded-lg">
          <h1 className="mb-3 font-bold text-l mt-10">Heading X</h1>
          <p>Duration: x Min/day</p>
          <p>For X&X bhk</p>
          <p>Upto 3 member family</p>
          <p>Utensils & Kitchen cleaning</p>
          <p>Washing Cupons</p>
          <p>Steam Cleaning</p>
          <p className="mt-3 mb-3">
            Within allocated time, you use the maid to perform do any work
            except cooking, cleaning bathrooms and risky areas.{" "}
          </p>
          <p>
            <a className=" text-orange-500 ">Terms and conditions</a>
          </p>
          <button className="p-5">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
