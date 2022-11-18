import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import Form from "../Form/Form";
import useTitle from "../Hooks/UseTitle";
import AverageReview from "../Reviews/AverageReview";
import Reviews from "../Reviews/Reviews";
import SignInToWriteAReview from "../Reviews/SignInToWriteAReview";
import Spinner from "../Spinner/Spinner";

const ServiceDetails = () => {
  const { _id, name, price, photo, info } = useLoaderData();
  console.log(useLoaderData());
  const sname = name;
  useTitle(`${sname}`);
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [newReviews, setNewReviews] = useState([]);
  useEffect(() => {
    fetch("https://server-side-nayem9b.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://server-side-nayem9b.vercel.app/reviews?sname=${name}`)
      .then((res) => res.json())
      .then((data) => setNewReviews(data));
  }, [name]);

  return (
    <div>
      {newReviews ? (
        <div className=' gap-4'>
          <section>
            <div class='mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-24 lg:px-8'>
              <div class='max-w-3xl'>
                <h2 class='text-3xl font-bold sm:text-4xl'>{name}</h2>
              </div>

              <div class='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
                <div class='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
                  <PhotoProvider>
                    <PhotoView src={photo}>
                      <img alt='Dish' src={photo} class='' />
                    </PhotoView>
                  </PhotoProvider>
                </div>

                <div class=''>
                  <article class='space-y-4 text-gray-600'>
                    <p className='text-2xl font-semibold'>
                      {price}
                      <span className='text-4xl font-bold ml-2'>৳</span>
                    </p>

                    <p>{info}</p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='divider'></div>
            {user ? (
              <>
                {" "}
                <div className='text-center flex justify-center items-center mb-10'>
                  <AverageReview></AverageReview>
                </div>
                <div class='mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-4'>
                  {reviews.map((rvw) => (
                    <Reviews key={rvw._id} rvw={rvw}></Reviews>
                  ))}
                </div>
                <Form
                  sname={sname}
                  reviews={reviews}
                  setNewReviews={setNewReviews}></Form>
              </>
            ) : (
              <>
                <SignInToWriteAReview></SignInToWriteAReview>
                <div class='mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
                  <AverageReview></AverageReview>

                  <div class='mt-8 grid lg:grid-cols-4 gap-x-16 gap-y-12 sm:grid-cols-1 md:grid-cols-2'>
                    {reviews.map((rvw) => (
                      <Reviews key={rvw._id} rvw={rvw}></Reviews>
                    ))}
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default ServiceDetails;
