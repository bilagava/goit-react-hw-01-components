import style from './style.module.css';

const Statisticslist = ({ id, label, percentage }) => {
  return (
    <li className={style.item}>
      {id}
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

export default Statisticslist;
