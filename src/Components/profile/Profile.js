import Stats from './stats/Stats';
import PropTypes from 'prop-types';
import { ProfileStyled } from './ProfileStyled';

const Profile = ({ user }) => {
  const { avatar, name, tag, location } = user;
  return (
    <ProfileStyled>
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
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
