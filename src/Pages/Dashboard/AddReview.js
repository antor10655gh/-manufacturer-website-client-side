import React from "react";
import { toast } from "react-toastify";

const AddReview = () => {
  const handleAddReview = (event) => {
    event.preventDefault();
    const reviews = {
      name: event.target.name.value,
      img: event.target.img.value,
      review: event.target.review.value,
      ratings: event.target.ratings.value,
    };
    console.log(reviews);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added your review");
          console.log(data);
          event.target.reset();
        }
      });
  };
  return (
    <div className="px-6 lg:px-12 lg:w-3/6">
      <header className="pt-3">
        <h2 className="text-2xl py-2">Add a Review</h2>
      </header>
      <div class="max-w-xl my-5 bg-white">
        <div>
          <form onSubmit={handleAddReview}>
            <div class="mb-6">
              <label for="name" class="block mb-2 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm text-gray-600">
                Your Image
              </label>
              <input
                type="text"
                name="img"
                placeholder="Image Link"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="phone" class="text-sm text-gray-600">
                Ratings(Out of 5)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                name="ratings"
                placeholder="Give us ratings"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm text-gray-600">
                Your Message
              </label>

              <textarea
                rows="5"
                name="review"
                placeholder="Your Message"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="btn btn-accent text-white w-full max-w-md mb-2 focus:outline-none"
              >
                Send Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
