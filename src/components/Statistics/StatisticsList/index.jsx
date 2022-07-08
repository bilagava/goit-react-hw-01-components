import style from './style.module.css';

const Statisticslist = ({ label, percentage }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

export default Statisticslist;
