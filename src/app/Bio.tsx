const Bio = () => {
  return (
    <div className="p-5 lg:p-20 flex justify-center items-center">
      <div className="lg:flex flex-col space-y-5  w-full">
        <div className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
          <span>Hallo!</span>
        </div>

        <div className="lg:text-5xl text-3xl font-extrabold text-center lg:text-left">
          <span>I am Wilbert Victorio Tandri</span>
        </div>

        <div className="text-2xl font-extralight space-y-1 text-center lg:text-left">
          <span>I am a Photographer. I specialize in capturing moments that tell stories.</span>
          <p>Whether through portraits, landscapes, events, or product photography.</p>
        </div>

        <div className="flex justify-center lg:justify-start mt-5">
          <button className="bg-black text-white font-bold text-sm w-48 h-10 rounded-md">
            See Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bio;
