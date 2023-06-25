import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Natter</span>
      <div className="user">
        <img src="https://s-media-cache-ak0.pinimg.com/236x/10/d1/ae/10d1aea41f98ea64bcdb899bc7b3fa89.jpg" />
        <span>Mr. Bean</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
