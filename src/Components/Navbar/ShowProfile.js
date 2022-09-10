import React from "react";

function ShowProfile(props) {
  const user = false;
  return (
    <div>
      {!user ? (
        <div className="showProfile__unsignedin">
          <i className=" fa-solid fa-user"></i>
          <span>Đăng nhập</span>
        </div>
      ) : (
        <div className="showProfile__signedin">
          <img src={require("../../Assets/Banner/ava.jpg")} alt="profilePicture" />
          <span className="profile__username">Quyen Luu Van</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      )}
    </div>
  );
}

export default ShowProfile;
