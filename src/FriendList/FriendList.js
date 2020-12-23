import Friend from './Friend';
import propTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        const color = isOnline ? 'green' : 'red';
        return <Friend id={id} avatar={avatar} name={name} color={color} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string,
    }),
  ).isRequired,
};

export default FriendList;
