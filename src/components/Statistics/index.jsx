import PropTypes from 'prop-types';
import css from '../Statistics/style.css';
import Statisticslist from '../Statisticslist';
import RandomColor from '../../RandomColor.js';
import data from '../data.json';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(data => (
          <Statisticslist
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
