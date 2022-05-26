import React, { useEffect, useState } from "react";
import Review from "./Review";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        parseInt(data.ratings);
        setReviews(data);
      });
  }, []);
  return (
    <div className="pt-5">
      <header className="text-center pt-3 lg:pt-3 lg:pb-5 pb-3">
        <h2>
          <span id="span">R</span>
          <span id="span">E</span>
          <span id="span">V</span>
          <span id="span">I</span>
          <span id="span">E</span>
          <span id="span">W</span>
          <span id="span">S</span>
        </h2>
        <div
          className="pt-5"
          style={{
            width: "150px",
            borderBottom: "3px solid #FFAE22",
            margin: "0 auto",
          }}
        ></div>
      </header>

      <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12">
        {reviews.map((singleReview) => (
          <Review key={singleReview._id} singleReview={singleReview}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
