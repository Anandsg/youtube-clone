import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CommentData = [
  {
    name: 'Big Brother',
    text: 'very good, cool',
    replies: [],
  },
  {
    name: 'Priya',
    text: 'cool',
    replies: [ 
      {
        name: 'Surbhi',
        text: 'Superb soul touching song',
        replies: [],
      },
      {
        name: 'Srijan',
        text: 'Such a mesmerising song..',
        replies: [
          {
            name: 'Mr. Shetty',
            text: 'Miss u kabir singh',
            replies: [],
          },
          {
            name: 'Tanya',
            text: 'replies',
            replies: [
              {
                name: 'cute-pie',
                text: 'very good, cool',
                replies: [
                  {
                    name: 'rocky',
                    text: 'very good',
                    replies: [
                      {
                        name: 'rock',
                        text: 'Miss u kabir singh',
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'cool_gay_me',
            text: 'Superb soul touching song',
            replies: [],
          },
        ],
      },
      {
        name: 'BB',
        text: 'MY HEART IS BROKEN ON THIS TIME😅💔',
        replies: [],
      },
      {
        name: 'Ipshita',
        text: 'very good, cool, replies',
        replies: [],
      },
    ],
  },
  {
    name: 'sweety',
    text: 'very good, cool',
    replies: [],
  },
  {
    name: 'Anu',
    text: 'very good, cool',
    replies: [],
  },
  {
    name: 'cool_gay_me',
    text: 'MY HEART IS BROKEN ON THIS TIME😅💔',
    replies: [],
  },
  {
    name: 'rocky',
    text: 'very good, cool',
    replies: [],
  },
  {
    name: 'Butterfly',
    text: 'Miss u kabir singh',
    replies: [],
  },
  {
    name: 'Ipshita',
    text: 'very good, cool',
    replies: [],
  },
  {
    name: 'rocky',
    text: 'very good, cool',
    replies: [],
  },
  {
    name: 'Butterfly',
    text: 'very good, cool',
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-start space-x-2 p-2 bg-white rounded-lg shadow-md">
      <img
        className="h-8 w-8 rounded-full"
        alt="user icon"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs mt-1">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div className="pl-8 border-l border-gray-400 space-y-2">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {comment.replies.length > 0 && <CommentsList comments={comment.replies} />}
        </div>
      ))}
    </div>
  );
};

const CommentContainer = ({ snippet, statistics }) => {
  const [liveMessage, setLiveMessage] = useState('');

  return (
    <div className="px-4 py-8 bg-gray-50">
      <form
        className="flex items-center bg-white rounded-lg p-2 shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          setLiveMessage('');
        }}
      >
        <span className="bg-indigo-200 rounded-full text-xl px-2 py-0.5 text-white">I</span>
        <input
          className="flex-grow ml-2 bg-transparent focus:outline-none text-xs"
          type="text"
          placeholder="Add a comment..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
      </form>
      <div className="mt-8">
        {CommentData.map((comment, index) => (
          <div key={index} className="mb-4">
            <Comment data={comment} />
            {comment.replies.length > 0 && <CommentsList comments={comment.replies} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;