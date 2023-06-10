const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="h-8"
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png"
      />
      <span className="font-serif font-semibold p-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
