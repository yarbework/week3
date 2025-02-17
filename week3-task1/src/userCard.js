import React from "react";

function UserCard(props) {
  return (
    <div>
      <p>Name : {props.name} </p>
      <p>email : {props.email} </p>;
    </div>
  );
}
export default UserCard;
