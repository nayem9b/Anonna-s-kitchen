import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Cards from "../Cards/Cards";
import Tagline from "../Content/Tagline/Tagline";
import useTitle from "../Hooks/UseTitle";
import Testimonials from "../Testimonials/Testimonials";
import UserAddedService from "../UserAddedService/UserAddedService";
import SeeAllButton from "./SeeAllButton/SeeAllButton";
import food from "../../Images/95592-preparing-food.json";
import Lottie from "lottie-react";
import Contact from "../Contact/Contact";
const Home = () => {
  const [newService, setNewService] = useState([]);
  console.log(newService);
  useEffect(() => {
    fetch(`https://server-side-nayem9b.vercel.app/newservices`)
      .then((res) => res.json())
      .then((data) => setNewService(data));
  }, []);

  useTitle("Home");
  return (
    <div>
      <Tagline></Tagline>
      <div className='lg:ml-80 sm:ml-14 md:ml-24'>
        <Cards></Cards>
      </div>

      <div className='text-center'>
        <SeeAllButton></SeeAllButton>
      </div>

      <h1 className='text-4xl font-bold text-center mb-6 mt-6'>
        {" "}
        User Added Service is here
      </h1>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-7'>
        {newService.map((newsrv) => (
          <UserAddedService key={newsrv._id} newsrv={newsrv}></UserAddedService>
        ))}
      </div>
      <div className=' flex justify-center lg:ml-[400px] lg:mt-[-66px] md:h-[100px] md:w-[100px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={food} loop={true} />
      </div>
      <h1 className=' text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500  '>
        Experience the deliciousness
      </h1>

      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
