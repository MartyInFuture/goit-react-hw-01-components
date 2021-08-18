import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import user from '../assets/user.json';
import friends from '../assets/friends.json';
import PropTypes from 'prop-types';
import statisticalData from '../assets/statistical-data.json';
import FriendsList from './friendsList/FriendsList';
import TransactionsHistory from './transactionsHistory/TransactionsHistory';
import transactions from '../assets/transactions.json';

const App = () => {
  return (
    <main>
      <Profile user={user} />
      <Statistics title="Upload stats" statisticalData={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </main>
  );
};

export default App;

Profile.propTypes = {
  user: PropTypes.object,
};
