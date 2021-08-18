import PropTypes from 'prop-types';
import Friend from './friend/Friend';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    })
  ),
};
