const Footer = () => {
  return (
    <div className="flex">
      <div>
        <div>logo</div>
        <div className="flex">
          Contact US
          <input
            type="email"
            id="UserEmail"
            placeholder="john@rhcp.com"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
          <button className="bg-orange-600 hover:bg-orange-500 inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md mt-10">
            Send
          </button>
        </div>
        <div>map</div>
      </div>

      <p>
        <h1>Address</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
      </p>
      <div>Social media</div>
    </div>
  );
};

export default Footer;
