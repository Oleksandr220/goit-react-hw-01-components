import React from 'react';
import defaultImage from '../../picture/default.jpg';
import PropTypes from 'prop-types';
import FriendItem from './FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="FriendList__list">
      {friends.map(({ avatar, name, isOnline = true, id }) => (
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
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
