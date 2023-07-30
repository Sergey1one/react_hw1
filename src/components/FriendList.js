import PropTypes from 'prop-types';
import { Friend } from './Friend';


export const FriendList = ({ friends}) => {
    
    return <ul class="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) =>
        {
            return <Friend
                key={id}
                status={isOnline}
                avatar={avatar}
            name={name}/>
  })}
</ul>
}

FriendList.propTypes = {
    friends:PropTypes.array
}