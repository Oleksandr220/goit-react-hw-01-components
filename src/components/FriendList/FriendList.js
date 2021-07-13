import React from 'react';
import defaultImage from '../../picture/default.jpg';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="FriendList__list">
      {friends.map(({ avatar, name, isOnline = true, id }) => (
        <li className="item" key={id}>
          <span
            className="status"
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  avatar: defaultImage,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.oneOf([true, false]),
    }),
  ).isRequired,
};

export default FriendList;
