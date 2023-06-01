import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { json } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggetions, setShowsuggestions] = useState(false);

  useEffect(() => {
    // Make an API call after every key pressed
    //but if the diff between two API calls is <200ms declane the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /* If u search i in search bar (Iphone)
        - render the component
        - useEffect (); will be called
        - start timer -> make API call after 200ms

     If u search p in search bar 
        - again it will re-render the component
        - useEffect(); will be called
        - newly start timer -> make API call after 200ms (it will reset the timer)
  */

  const getSearchSuggestions = async () => {
    console.log("API call -> " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };

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
        <div>
          <input
            className="w-1/2 border px-9 rounded-l-full border-gray-400"
            type="text "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
          />
          <button className="border px-2 border-gray-400 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggetions && (
          <div className="fixed bg-white w-[31.5rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="px-4 py-2 hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
