import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h[900px]">
      <Image
        src="/images/home.jpg"
        layout="fill"
        objectFit="cover"
        priority="true"
      />
      <div className="absolute top-1/3 w-full text-center">
        <p className="text-sm sm:text-lg text-white p-6 font-bold bg-red-400 rounded-lg bg-opacity-25 mx-32 lg:mx-[350px] xl:mx-[400px]">
          Not sure where to go? Perfect.
        </p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Explore</button>
      </div>
    </div>
  );
};

export default Banner;
