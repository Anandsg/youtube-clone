import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-md">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 col-span-1 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyYIYjMqOdObTIuRhfemvIb9mc0JPmbmdoqgvLoYV-Vtqbpe1MtH3he8Z9acNT5mP1u4&usqp=CAU"
        />
        <a href="/">
          <img
            className="h-12"
            alt="youtube-logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>

      <div className="col-span-10 m-3">
        <input
          className="w-1/2 border rounded-l-full border-gray-400"
          type="text "
        />
        <button className="border px-2 border-gray-400 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
