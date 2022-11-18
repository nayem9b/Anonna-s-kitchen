import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
const AllServiceCard = ({ srv }) => {
  const { name, info, photo, price, _id } = srv;
  const newInfo = info.slice(0, 100) + "...";
  return (
    <div>
      <article class='group my-10'>
        <PhotoProvider>
          <PhotoView src={photo}>
            <img
              alt='Lava'
              src={photo}
              class='h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]'
            />
          </PhotoView>
        </PhotoProvider>

        <div class='p-4'>
          <div className='flex justify-between '>
            <h3 class='text-lg font-medium text-gray-900'>{name}</h3>
            <h3 class='text-lg font-medium text-gray-900'>
              {price} <span className='text-3xl'>৳</span>{" "}
            </h3>
          </div>

          <p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
            {newInfo}
          </p>
        </div>
        <Link to={`/services/${_id}`}>
          <span class='relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75'>
            View Details
          </span>
        </Link>
      </article>
    </div>
  );
};

export default AllServiceCard;
