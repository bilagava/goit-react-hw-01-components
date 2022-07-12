import style from './style.module.css';
import PropTypes from 'prop-types';

const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsListItem;