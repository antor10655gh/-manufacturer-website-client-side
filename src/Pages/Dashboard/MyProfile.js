import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyProfile = () => {
  const [googleUser] = useAuthState(auth);
  const [demoUser, setDemoUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/userInfo/${googleUser.email}`)
      .then((res) => res.json())
      .then((data) => setDemoUser(data));
  }, [demoUser, googleUser]);
  const handleUpdate = (event) => {
    event.preventDefault();
    const updateUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      education: event.target.education.value,
      city: event.target.city.value,
      contact: event.target.contact.value,
    };
    fetch(`http://localhost:5000/user/${googleUser.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully saved");
          console.log(data);
          event.target.reset();
        }
      });
    console.log(updateUser);
  };
  return (
    <div className="px-6 lg:px-12">
      <header className="pt-3">
        <h2 className="text-2xl py-2">My Profile</h2>
      </header>
      <div>
        <div class="card w-96 mx-auto bg-base-100 shadow-xl mb-16">
          <figure class="px-10 pt-10">
            <div class="avatar online">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={googleUser.photoURL} alt={googleUser.displayName} />
              </div>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">{googleUser.displayName}</h2>
            <p>
              <FontAwesomeIcon
                className="mr-2"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              {googleUser.email}
            </p>
            {demoUser ? (
              <div>
                <p className="pb-2">
                  <span className="font-bold">Education:</span>{" "}
                  {demoUser.education}
                </p>
                <p className="pb-2">
                  <span className="font-bold">City:</span> {demoUser.city}
                </p>
                <p className="pb-2">
                  <span className="font-bold">Contact:</span> {demoUser.contact}
                </p>
              </div>
            ) : (
              ""
            )}
            <div class="card-actions flex justify-center">
              <a
                href="#profileModal"
                class="btn btn-primary btn-sm my-3 btn-outline"
              >
                Update Profile
              </a>
            </div>
          </div>
        </div>

        <div class="modal" id="profileModal">
          <div class="modal-box">
            <form onSubmit={handleUpdate}>
              <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                <div class="card-body">
                  <div class="form-control">
                    <input
                      name="name"
                      type="text"
                      value={googleUser.displayName}
                      class="input input-bordered"
                      disabled
                    />
                  </div>
                  <div class="form-control">
                    <input
                      name="email"
                      type="email"
                      value={googleUser.email}
                      class="input input-bordered"
                      disabled
                    />
                  </div>
                  <div class="form-control">
                    <input
                      name="education"
                      type="text"
                      placeholder="Education"
                      class="input input-bordered"
                    />
                  </div>
                  <select
                    name="city"
                    class="select select-bordered w-full max-w-xs font-medium"
                  >
                    <option disabled selected>
                      Select your city?
                    </option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Barishal</option>
                    <option>Sylhet</option>
                    <option>Rajshahi</option>
                    <option>Mymensing</option>
                    <option>Rangpur</option>
                    <option>Khulna</option>
                  </select>
                  <div class="form-control">
                    <input
                      name="contact"
                      type="number"
                      placeholder="Contact No"
                      class="input input-bordered"
                    />
                  </div>
                </div>
              </div>

              <div class="modal-action">
                <button
                  type="submit"
                  href="#"
                  class="mx-auto btn btn-primary w-32"
                >
                  Save
                </button>
                <a
                  href="#"
                  for="#profileModal"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
