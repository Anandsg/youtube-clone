import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate } from "../utils/generateName";
import { generateMessage } from "./../utils/generateMessage";
import { generateProfileImage } from "../utils/generateProfileImages";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("abc");
      dispatch(
        addMessage({
          name: generate(),
          message: generateMessage(),
          profile: generateProfileImage(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="h-[580px] bg-white ml-2">
      <div className="w-full border  border-black bg-slate-100 rounded-t-lg ">
        <h1 className="font-bold border-b-2 border-black p-2">Live Chat</h1>
        <div className="space-y-2 overflow-y-scroll p-2 flex flex-col-reverse h-[468px]">
          {chatMessages.map((c, i) => (
            <ChatMessage
              key={i}
              name={c.name}
              message={c.message}
              profile={c.profile}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-1 border border-black rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "You",
              message: liveMessage,
              profile:
                "https://resources.pulse.icc-cricket.com/photo-resources/2022/12/11/4ea298be-e798-48ba-b9f5-fc6ba267cf61/Kohli-drought.jpg?width=500&height=500",
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-[80%] border border-black rounded-lg py-1 px-2 "
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          placeholder="Write your comment here"
        />
        <button
          type="submit"
          className="px-4 mx-2 bg-green-200 justify-center rounded-md py-1"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
