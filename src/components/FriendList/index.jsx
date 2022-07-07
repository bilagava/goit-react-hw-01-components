import FriendListItem from '../FriendListItem';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const FriendList = ({ items }) => {
  return (
    <ul className={styles.friendList}>
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
