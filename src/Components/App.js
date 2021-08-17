import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import user from '../assets/user.json';
import PropTypes from 'prop-types';
import statisticalData from '../assets/statistical-data.json';

const App = () => {
  return (
    <main>
      <Profile user={user} />
      <Statistics title="Upload stats" statisticalData={statisticalData} />
    </main>
  );
};

export default App;

Profile.propTypes = {
  user: PropTypes.object,
};
