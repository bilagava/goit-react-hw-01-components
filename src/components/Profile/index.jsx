import ProfileDescription from './ProfileDescription';
import ProfileStats from './ProfileStats';
import PropTypes from 'prop-types';
import user from 'Data/user.json';
import style from './style.module.css';

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileStats stats={user.stats} />
    </div>
  );
};

Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
