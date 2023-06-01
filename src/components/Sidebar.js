import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-md w-58">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>History</li>
        <li>Shorts</li>
        <li>Liked videos</li>
        <li>Watch later</li>
      </ul>
      <h2 className="font-bold pt-4">Subscriptions</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h2>Explore</h2>
      <ul>
        <h2 className="font-bold pt-4">Trending</h2>
        <li>Shopping</li>
        <li>Music</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
