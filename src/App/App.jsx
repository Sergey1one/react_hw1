import Profile from "../components/Profile/Profile";
import { Statistics } from "../components/Statistics/Statistics";
import { FriendList } from "../components/FriendList/FriendList";
import { TransactionHistory } from "../components/TransactionHistory/TransactionHistory";
import friends from '../friends.json';
import data from '../data.json';
import user from '../user.json';
import transactions from '../transactions.json'
import { AppContainer } from "./App.styled";
import { GlobalStyle } from "GlobalStyle";
 

export const App = () => {
  return (
    <AppContainer>
     
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} /> 
      
    </AppContainer>
  );
};
