import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://server-side-nayem9b.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className='text-center'>
      <section class=''>
        <div class='flex flex-wrap mx-auto md:flex-nowrap p-12'>
          {services.map((srv) => (
            <SingleCard key={srv._id} srv={srv}></SingleCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
