import PropTypes from 'prop-types';
import Friend from './friend/Friend';
import { FriendsListStyled } from './FriendsListStyled';

const FriendsList = ({ friends }) => {
  return (
    <FriendsListStyled>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Friend key={id} isOnline={isOnline} avatar={avatar} name={name} />
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
