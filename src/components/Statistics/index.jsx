import Statisticslist from '../StatisticsList';
import style from './style.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ statData, title }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.statList}>
        {statData.map(data => (
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

Statistics.propTypes = {
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
