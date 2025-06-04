import css from "./FriendList.module.css";
import clsx from "clsx";


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img className={css.image} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>

      <p
        className={clsx(css.state, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

const FriendList = ({friends}) => {
  const array = friends.map((friend, index) => (
    <li key={index} className={css.item}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ));

  return  (
        <ul className={css.friendList}>
            {array}
        </ul>
    );
};




export default FriendList;
