import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaPlay, FaArchive, FaYoutubeSquare, FaHistory, FaYoutube, FaClock, FaThumbsUp, FaFire, FaShoppingBag, FaMusic, FaFilm, FaPodcast, FaGamepad, FaTrophy } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <>
      <div className="p-6 pt-3 shadow-lg w-56 relative bg-white">
        <ul className="mb-3">
        <li className="py-3 font-bold cursor-pointer">
            <Link to={"/"} className="flex items-center">
              <FaHome className="mr-3" /> Home
            </Link>
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaPlay className="mr-3" /> Shorts
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaArchive className="mr-3" /> Subscriptions
          </li>
        </ul>
        <hr />
        <ul className="mb-3 mt-3">
          <li className="py-3 cursor-pointer flex items-center">
            <FaYoutube className="mr-3" /> Library
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaHistory className="mr-3" /> History
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaYoutubeSquare className="mr-3" /> Your videos
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaClock className="mr-3" /> Watch later
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaThumbsUp className="mr-3" /> Liked videos
          </li>
        </ul>
        <hr />
        <h1 className="mt-3 mb-3 font-semibold">Explore</h1>
        <ul>
          <li className="py-3 cursor-pointer flex items-center">
            <FaFire className="mr-3" /> Trending
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaShoppingBag className="mr-3" /> Shopping
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaMusic className="mr-3" /> Music
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaFilm className="mr-3" /> Movies
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaPodcast className="mr-3" /> Live
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaGamepad className="mr-3" /> Gaming
          </li>
          <li className="py-3 cursor-pointer flex items-center">
            <FaTrophy className="mr-3" /> Sports
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;


