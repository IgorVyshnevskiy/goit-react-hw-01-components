import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json'

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';



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
  </section>
  );
};
