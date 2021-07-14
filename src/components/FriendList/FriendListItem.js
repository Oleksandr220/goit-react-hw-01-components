import React from 'react';
import './FriendList.css';

const FriendItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className="item">
      <span
        className="status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendItem;
