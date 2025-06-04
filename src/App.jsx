
import './App.css'
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from './components/profile/Profile';
import FriendList from './components/friendList/FriendList'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

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
      <TransactionHistory items={transactions} />
      </div>
   
  );
};