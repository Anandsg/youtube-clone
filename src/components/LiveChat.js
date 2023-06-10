import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandoMessages, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [LiveMessage, setLiveMessage] = useState("");

  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      // console.log("API polling");

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandoMessages(18),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full  h-[550px] ml-2 p-2 border border-black bg-gray-100 rounded-md shadow-md overflow-y-scroll flex flex-col-reverse">
        {/* Don't use the index as a key  */}
        <div>
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("On submit", LiveMessage);
          dispatch(
            addMessage({
              name: "You",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-2 border border-black"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className=" ml-3 px-2 border border-black bg-green-200 rounded-md">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
