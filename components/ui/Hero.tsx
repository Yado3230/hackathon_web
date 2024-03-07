import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <main
      className="w-screen md:py-0 md:my-0 bg-black h-4/5 md:w-screen md:bg-black md:h-[75vh] h-[75vh]"
      style={{
        backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Yty3FTuMVkYKvC9zB5e7WQ.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:h-full md:flex md:justify-center md:items-center h-full flex justify-center items-center sm:relative">
        <div className="relative flex">
          <FaSearch
            size={22}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 md:text-black text-yellow-300"
          />

          <input
            type="text"
            placeholder="Search Business Ideas"
            className="pl-12 w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] h-14 md:h-14  text-sm md:text-lg md:pl-20 text-gray-900 border border-gray-300 rounded-3xl md:bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
