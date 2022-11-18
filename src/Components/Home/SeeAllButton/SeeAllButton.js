import React from "react";
import { Link } from "react-router-dom";

const SeeAllButton = () => {
  return (
    <div>
      <button class='group relative inline-block focus:outline-none focus:ring'>
        <span class='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0'></span>
        <Link to={`/services`}>
          <span class='relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75'>
            See all
          </span>
        </Link>
      </button>
    </div>
  );
};

export default SeeAllButton;
