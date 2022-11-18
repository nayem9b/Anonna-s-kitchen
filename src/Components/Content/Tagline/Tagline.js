import React from "react";
import image from "../../../Images/chef.jpeg";
const Tagline = () => {
  return (
    <div>
      <section>
        <div class='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
          <div class='flex flex-wrap items-center mx-auto max-w-7xl'>
            <div class='w-full lg:max-w-lg lg:w-1/2 rounded-xl'>
              <div>
                <div class='relative w-full max-w-lg'>
                  <div class='absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>

                  <div class='absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
                  <div class='relative'>
                    <img
                      class='object-cover object-center mx-auto rounded-lg shadow-2xl'
                      alt='hero'
                      src={image}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class='flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0'>
              <span class='mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase'>
                {" "}
                Meet Anonna{" "}
              </span>
              <h1 class='mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl'>
                Get homemade <span className='text-orange-400'>ranna</span> from
                <span className='text-orange-400'> Anonna</span>
              </h1>
              <p class='mb-8 text-base leading-relaxed text-left text-gray-500'>
                Reasonable food at reasonable price in your doorstep.
              </p>
              <h1>
                What{" "}
                <span className='text-lg text-orange-400 font-bold'>
                  Anonna
                </span>{" "}
                can cook
              </h1>
              <ul>
                <li>1. Haleem</li>
                <li>2. Biyiani</li>
                <li>3. KalaBhuna</li>
                <li>4. Chicken Roast</li>
                <li>5. Kacci</li>
                <li>6. Mutton Korma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tagline;
