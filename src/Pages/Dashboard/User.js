import React from "react";
import { toast } from "react-toastify";

const User = ({ user, index, refetch }) => {
  const { email, role } = user;
  const createAdmin = () => {
    fetch(`https://arcane-headland-03409.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast("Make Admin Successfully", {
            autoClose: 1000,
          });
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={createAdmin} class="btn btn-xs">
            Create Admin
          </button>
        ) : (
          <button disabled class="btn btn-xs">
            Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs btn-error">Remove User</button>
      </td>
    </tr>
  );
};

export default User;
