import PropTypes from 'prop-types';
import Friend from './friend/Friend';
import { FriendsListStyled } from './FriendsListStyled';

const FriendsList = ({ friends }) => {
  return (
    <FriendsListStyled>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendsListStyled>
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
