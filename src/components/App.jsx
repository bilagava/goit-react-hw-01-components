import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import data from 'Data/data.json';
import friends from 'Data/friends.json';
import transactions from 'Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" statData={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
