import PropTypes from 'prop-types';
import style from './style.module.css';

const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
    <div className={style.description}>
      <img src={avatar} alt={username} className={style.avatar} />
      <p className={style.name}>{username}</p>
      <p className={style.tag}>{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
  );
};

ProfileDescription.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileDescription;
