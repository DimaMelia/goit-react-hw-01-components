import propTypes from 'prop-types';
import s from './Friends.module.css';

function FriendList({friends}) {
    return (
    <ul className="friend-list">
    {friends.map((friend) => {
        const color = friend.isOnline? "green": "red";
        return (<li className={s.item} key={friend.id.toString()}>
            <span className={s.status} style={{backgroundColor: color}}></span>
            <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={s.name}>{friend.name}</p>
        </li>)
    })}
  </ul>)
};

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
        avatar: propTypes.string,
    })).isRequired,
};

export default FriendList;