import PropTypes from 'prop-types';
import style from './style.module.css';

const ProfileStats = ({ stats }) => {
  return (
    <ul className={style.stats}>
      <li className={style.statsUnit}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li className={style.statsUnit}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li className={style.statsUnit}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};
ProfileStats.propTypes = {
  stats: PropTypes.object.isRequired,
};
export default ProfileStats;
