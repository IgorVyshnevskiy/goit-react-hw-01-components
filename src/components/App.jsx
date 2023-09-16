import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json'
import friends from '../components/FriendsList/friends.json'

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';




export const App = () => {
  return (
   <section>
    <Profile 
      imageUrl={user.avatar}
      userName={user.username}
      userTag={user.tag}
      userLocation={user.location}
      stats={user.stats}
    />

    <Statistics title={'Upload stats'} stats={data} />

    <FriendList
      friends={friends}
    />
  </section>
  );
};
