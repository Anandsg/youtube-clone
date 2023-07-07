import React from "react";
import { prettifyNumber } from "../number";

const VideoCard = ({ info }) => {
  // console.log(info);

  if (!info || !info.snippet) {
    return null;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const views = statistics.viewCount;

  return (
    <div className="p-2 m-2 w-56 shadow-md">
      <img className="rounded-md" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-semibold">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="font-sans">{prettifyNumber(views)} views</li>
      </ul>
    </div>
  );
};  

export default VideoCard;
