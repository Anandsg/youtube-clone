import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  if (!info || !info.snippet) {
    return null; // Render nothing if info or snippet is undefined
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-md">
      <img className="rounded-md" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-semibold py-2">{title}</li>
        <li className="">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

