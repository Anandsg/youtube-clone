import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="p-3 m-2 w-full">
      <div className="flex w-full">
      <div >
        <iframe
          width="900"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
