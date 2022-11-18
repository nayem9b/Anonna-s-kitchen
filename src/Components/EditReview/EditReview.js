import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useTitle from "../Hooks/UseTitle";

const EditReview = () => {
  useTitle("Edit-Review");
  const router = useParams();
  const [review, setReview] = useState({});
  const { id } = router;
  useEffect(() => {
    fetch(`https://server-side-nayem9b.vercel.app/myreviews/edit/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err));
  }, [id]);

  const { message } = review;

  const { sname } = review;
  const handleEditSubmit = (event) => {
    event.preventDefault();

    const newInfo = {
      message: event.target.review.value,
    };

    fetch(`https://server-side-nayem9b.vercel.app/myreviews/edit/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    toast.success("Successfully updated review");
    event.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleEditSubmit}
        action='#'
        class='mt-8 grid grid-cols-6 gap-6'>
        <div class='col-span-6'>
          <label for='Email' class='block text-sm font-medium text-gray-700'>
            Service Name
          </label>

          <input
            type='text'
            id='Email'
            defaultValue={sname}
            readOnly
            class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
          />
          <div className='mt-4'>
            <label for='Email' class='block text-sm font-medium text-gray-700'>
              Update Review
            </label>

            <label class='sr-only' for='message'>
              Update Review
            </label>
            <textarea
              class='w-full rounded-lg border-gray-200 p-3 text-sm'
              placeholder={message}
              rows='8'
              name='review'
              id='message'></textarea>
          </div>
          <div class='mt-4'>
            <button
              type='submit'
              class='inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto'>
              <span class='font-medium'> Update Review </span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='ml-3 h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default EditReview;
