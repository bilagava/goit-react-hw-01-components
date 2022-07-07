import Profile from './Profile';
// import Statistics from './Statistics';
// import FriendList from './FriendList';
// import TransactionHistory from './TransactionHistory';
import user from '../Data/user.json';
// import data from '../Data/data.json';
// import friends from '../Data/friends.json';
// import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" statData={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
};
