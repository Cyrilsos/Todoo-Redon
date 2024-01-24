const Blog = () => {
  return (
    <div className="text-center ">
      <h1 className="flex-auto mb-10 font-extrabold text-3xl ">Blogs</h1>
      <div className="flex text-center  space-x-20 place-content-center">
        <div className="  bg-white text-black border-black  w-72 text-center rounded-lg h-60 ">
          {/* <img>img</img> */}
          <h3>Importance of verified house maids</h3>
          <p>
            Nowadays people are very busy with their routine as well as official
            work. Peopleseek the
          </p>
        </div>
        <div className=" bg-white text-black border-black w-72   text-center rounded-lg h-60 ">
          {/* <img>img</img> */}
          <h3>Importance of daily house cleaning</h3>
          <p>
            For a healthy life, a clean environment is very much necessary. For
            that you need
          </p>
        </div>
        <div className=" bg-white text-black border-black w-72   text-center rounded-lg h-60 ">
          {/* <img>img</img> */}
          <h3>Health issues caused by dust</h3>
          <p>
            Let’s start the topic with a famous quote “Health is Wealth”. Health
            is very important
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
