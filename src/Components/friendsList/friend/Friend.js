import { FriendStyled } from './FriendStyled';

const Friend = ({ isOnline, avatar, name }) => {
  return (
    <FriendStyled>
      <span className={`status ${isOnline ? 'green' : 'red'}`}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </FriendStyled>
  );
};

export default Friend;
