import React from 'react';

const parseBody = body => {
  let match = body.match(/GIPHY_DATA (.+) _ (.+) _ (.+)/);
  if(match) {
    return (
      <div className='giphy'>
        <a href={match[1]}>{match[2]}</a><br />
        <p>Posted using /giphy [text]</p>
        <img src={match[3]} />
      </div>
    );
  } else {
    return <p>{body}</p>;
  }
};

export default ({ message }) => {

  return (
    <div className='chat-message group'>
      <h4>{message.author}</h4>
      {parseBody(message.body)}
      <h5>Posted {message.timestamp} ago</h5>
    </div>
  );
};
