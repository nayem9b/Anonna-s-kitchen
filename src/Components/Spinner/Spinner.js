import React from "react";
import Lottie from "lottie-react";
import spinner from "../../Images/loader-5.json";
const Spinner = () => {
  return (
    <div>
      <div className=' flex justify-center lg:ml-[400px] lg:mt-[-66px] md:h-[100px] md:w-[100px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={spinner} loop={true} />
      </div>
    </div>
  );
};

export default Spinner;
