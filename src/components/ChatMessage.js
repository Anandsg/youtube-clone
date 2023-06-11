const ChatMessage = ({ name, message, profile }) => {
  return (
    <div className="flex items-center p-2">
      <img className="h-8 rounded-full " alt="user-icon" src={profile} />
      <span className="font-serif font-semibold p-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
