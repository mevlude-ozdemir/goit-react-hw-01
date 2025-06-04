
import './App.css'
import userData from "./userData.json";
import friends from "./friends.json";
import Profile from './components/profile/Profile';
import FriendList from './components/friendList/FriendList'

export default function App() {
  return (
    <div className='app'>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      </div>
   
  );
};