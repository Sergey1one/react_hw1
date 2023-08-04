import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { FriendWrapper } from './FriendList.styled';


export const FriendList = ({ friends}) => {
    
    return <FriendWrapper>
        {friends.map(({ id, avatar, name, isOnline }) =>
        {
            return <Friend
                key={id}
                avatar={avatar}
                status={isOnline}
            name={name}/>
  })}
</FriendWrapper>
}

FriendList.propTypes = {
    friends:PropTypes.array
}