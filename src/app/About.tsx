const About = ({ type }: { type: string }) => {
  return (
    <div className='text-justify bg-gray-100'>
      <div className={`flex flex-col gap-4 sm:flex-row`}>
        
        <div
          className={`px-10 py-4 sm:py-16 sm:px-24 sm:w-1/2 order-first ${type === 'left' ? 'sm:order-last' : 'sm:order-first'}`}
        >
          <div className='p-5 sm:p-5 ml-5 sm:ml-1'>
            <p className='font-semibold text-neutral-400 mt-1 text-lg'>My Intro</p>
            <h1 className="text-2xl font-black sm:text-7xl lg:text-7xl md:text-5xl">About Me</h1>
          </div>
          <h2 className='text-lg sm:text-xl font-extralight text-black'>
            Hello, my name is Wilbert Victorio Tandri. I am 21 years old, currently pursuing my studies while also working as a photographer. 
            My passion for capturing moments has grown alongside my education, and I am excited to continue developing my skills in both fields.
          </h2>
        </div>

       
        <img 
          src="foto.jpg" 
          className="w-56 sm:w-3/5 rounded-br-full hidden sm:block" 
          alt="Wilbert Victorio Tandri" 
        />
        
      </div>
    </div>
  );
};

export default About;
