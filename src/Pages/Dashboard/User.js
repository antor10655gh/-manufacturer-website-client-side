import React from "react";

const User = ({ user, index, refetch }) => {
  const { email, role } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button class="btn btn-xs">Make Admin</button>
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
