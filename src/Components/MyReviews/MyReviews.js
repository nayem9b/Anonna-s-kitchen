import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../Hooks/UseTitle";
import MyReviewsTable from "./MyReviewsTable";

const MyReviews = () => {
  useTitle("My Review");
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`https://server-side-nayem9b.vercel.app/myreviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return console.log("Unauthorized access");
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    fetch(`https://server-side-nayem9b.vercel.app/myreviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Review Deleted");
          setRefresh(!refresh);
        }
      });
    console.log(id);
  };
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/myreviews/edit/${id}`);
  };
  useEffect(() => {
    fetch(`https://server-side-nayem9b.vercel.app/myreviews?email=${user?.email}`)
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return console.log("Unauthorized access");
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      {reviews?.length ? (
        <>
          <div className=''>
            <table className='table text-start '>
              <thead>
                <tr>
                  <th></th>
                  <th>Service Name</th>
                  <th>Review</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((myrvw) => (
                  <MyReviewsTable
                    myrvw={myrvw}
                    kry={myrvw._id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}></MyReviewsTable>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <h1 className='text-6xl text-center flex justify-center items-center'>
            No review is here
          </h1>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default MyReviews;
