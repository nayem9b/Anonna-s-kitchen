import React, { useEffect, useState } from "react";
import SingleCard from "../../Cards/SingleCard";
import useTitle from "../../Hooks/UseTitle";
import AllServiceCard from "./AllServiceCard";

const AllService = () => {
  useTitle("All Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://server-side-nayem9b.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <section class=''>
        <h1 className='text-center text-4xl font-bold'>
          What <span className='text-orange-400'>Anonna</span> can cook for you
        </h1>
        <div class=' grid lg:grid-cols-4 sm:grid-cols-1 gap-5 my-10 mx-auto md:flex-nowrap p-12'>
          {services.map((srv) => (
            <AllServiceCard srv={srv} key={srv._id}></AllServiceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllService;
