import React from "react";

const UserAddedService = ({ newsrv }) => {
  const { name, info, price } = newsrv;
  const newInfo = info.slice(0, 100) + "...";
  return (
    <div>
      <article class='overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
        <img
          alt='Office'
          src='https://www.yummyoyummy.com/wp-content/uploads/2021/09/IMG_0446-scaled.jpg'
          class='h-56 w-full object-cover'
        />

        <div class='bg-white p-4 sm:p-6'>
          <time datetime='2022-10-10' class='block text-xs text-gray-500'>
            10th Oct 2022
          </time>

          <a>
            <h3 class='mt-0.5 text-2xl font-bold text-gray-900'>{name}</h3>
          </a>

          <p class='mt-2 text-lg  leading-relaxed  line-clamp-3'>{newInfo}</p>
          <p class='mt-2 text-xl leading-relaxed  line-clamp-3'>
            {price} <span className='text-3xl'>৳</span>
          </p>
        </div>
      </article>
    </div>
  );
};

export default UserAddedService;
