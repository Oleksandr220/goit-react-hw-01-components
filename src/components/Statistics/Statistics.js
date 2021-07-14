import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="statistics__title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            className="statistics__item"
            key={id}
            style={{ backgroundColor: generateColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: ' ',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
