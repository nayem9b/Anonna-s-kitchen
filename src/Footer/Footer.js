import React from "react";
import navicon from "../Images/icons8-cooking-70.png";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer aria-label='Site Footer' class='bg-gray-100'>
        <div class='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
          <div class='lg:flex lg:items-end lg:justify-between'>
            <div>
              <div class='flex justify-center text-teal-600 lg:justify-start'>
                <img src={navicon} alt='' />
              </div>

              <p class='mx-auto mt-6 max-w-md text-center leading-relaxed text-lg lg:text-left'>
                Homemade ranna from Anonna
              </p>
            </div>

            <nav aria-label='Footer Nav' class='mt-12 lg:mt-0'>
              <ul class='flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12'>
                <li>
                  <a
                    class='text-gray-700 transition hover:text-gray-700/75'
                    href='/'>
                    About
                  </a>
                </li>

                <li>
                  <Link
                    to='/services'
                    class='text-gray-700 transition hover:text-gray-700/75'>
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to='/blogs'
                    class='text-gray-700 transition hover:text-gray-700/75'>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p class='mt-12 text-center text-sm text-gray-500 lg:text-right'>
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
