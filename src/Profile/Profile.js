import s from "./Profile.module.css"

function Profile({name, tag, location, avatar, stats}) {
    return (
    <div className={s.profile}>
        <div className={s.description}>
            <img
            src={avatar}
            alt="Аватар пользователя"
            className={s.avatar}
            width="100"
            height="100"
            />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li>
            <span className={s.label}>Followers</span>
            <span className="quantity">{stats.followers}</span>
            </li>
            <li>
            <span className={s.label}>Views</span>
            <span className="quantity">{stats.views}</span>
            </li>
            <li>
            <span className={s.label}>Likes</span>
            <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
};

export default Profile;
