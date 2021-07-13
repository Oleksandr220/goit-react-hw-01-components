import React from 'react';
import defaultImage from '../../picture/default.jpg';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="profile__avatar"
          width="480"
        />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-list">
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li className="stats-list">
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li className="stats-list">
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
