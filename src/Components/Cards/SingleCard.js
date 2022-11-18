import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const SingleCard = ({ srv }) => {
  const { name, photo, price, info, _id } = srv;
  const newInfo = info.slice(0, 100) + "...";
  return (
    <div>
      <button>
        <div class=' w-full'>
          <div class=' flex flex-col mt-6 items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8'>
            <PhotoProvider>
              <PhotoView src={photo}>
                <img src={photo} alt='' className='h-[200px] w-[300px]' />
              </PhotoView>
            </PhotoProvider>

            <div class='px-6 py-4'>
              <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <h1 className=' ml-6 text-2xl font-semibold'>
                  {price} <span className='text-3xl'>৳</span>
                </h1>
              </div>

              <p class='mt-4 text-base font-normal text-gray-500 leading-relax text-start'>
                {newInfo}
              </p>
              <button class='group relative inline-block focus:outline-none focus:ring'>
                <span class='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0'></span>
                <Link to={`/services/${_id}`}>
                  <span class='relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75'>
                    View Details
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SingleCard;
