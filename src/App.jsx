
import './App.css'
import userData from "./userData.json";
import Profile from './components/profile/Profile';

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
      </div>
   
  );
};