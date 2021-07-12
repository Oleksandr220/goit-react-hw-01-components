import React from "react";
import defaultImage from "../../picture/default.jpg";
import PropTypes from "prop-types";
// import style from './FriendList.css'

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline = true, id }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline}</span>
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
    })
  ).isRequired,
};
