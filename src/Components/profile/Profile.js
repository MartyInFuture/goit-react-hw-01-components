import Stats from './stats/Stats';
import PropTypes from 'prop-types';
import { ProfileStyled } from './ProfileStyled';

const Profile = ({ user }) => {
  return (
    <ProfileStyled>
      <div className="description">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <Stats stats={user.stats} />
    </ProfileStyled>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
  }),
};
