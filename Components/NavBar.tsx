import Image from "next/image";

const Navbar = () => {
  return (
    <div class="flex justify-between p-10 bg-white text-black">
      <div class="text-2xl font-bold">Logo</div>
      <div class=" pr-10 pl-10">
        <a class="pr-10">About US</a>
        <a class="pr-10">Service</a>
        <a>Pricing</a>
      </div>
      <button class="bg-orange-600 hover:bg-orange-500 inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md">
        Contact US
      </button>
    </div>
  );
};

export default Navbar;
