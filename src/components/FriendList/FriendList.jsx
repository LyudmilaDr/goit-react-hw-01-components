import PropTypes from 'prop-types';
import { FriendData, FriendItem, FriendStatus } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendData>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id}>
            <FriendStatus
              style={{
                backgroundColor: isOnline ? 'green' : 'red',
              }}
            ></FriendStatus>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </FriendItem>
        );
      })}
    </FriendData>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
