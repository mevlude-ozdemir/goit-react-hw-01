import css from "./Profile.module.css"
import { CiAt } from "react-icons/ci";
const Profile = ({
    name, tag, location, image, stats: { followers, views, likes }
}) => {
  return (
    <div className={css.ProfileCard}>
      <div className={css.Rozet}>
        <img className={css.Avatar}
          src={image}
          alt="User avatar"
        />
        <p className={css.Name}>{name}</p>
        <p className={css.Tag}><CiAt className={css.Icon}/>{tag}</p>
        <p className={css.Location}>{location}</p>
      </div>

      <ul className={css.Stats}>
        <li className={css.Stats_item}>
          <span className={css.Stats_itemName}>Followers</span>
          <span className={css.Stats_itemValue}>{followers}</span>
        </li>
        <li className={css.Stats_item}>
          <span className={css.Stats_itemName}>Views</span>
          <span className={css.Stats_itemValue}>{views}</span>
        </li>
        <li className={css.Stats_item}>
          <span className={css.Stats_itemName}>Likes</span>
          <span className={css.Stats_itemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
