// import './App.css'

// function App() {

//   return (
//     <>
   
//     </>
//   )
// }

// export default App

import userData from "./userData.json";
import Profile from './components/Profile';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};