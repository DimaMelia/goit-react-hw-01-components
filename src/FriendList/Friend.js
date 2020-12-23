import s from './Friends.module.css';

function Friend({ id, avatar, name, color }) {
  return (
    <li className={s.item} key={id.toString()}>
      <span className={s.status} style={{ backgroundColor: color }}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default Friend;
