import PropTypes from 'prop-types';
import { FriendAvatar, FriendItem, FriendName, OnlineStatus } from './FriendList.styled';


export const Friend = ({ status,avatar,name}) =>
{
    return (<FriendItem>
       <FriendAvatar src={avatar} alt={name} width="48" />
      <OnlineStatus status={status}>{ status}</OnlineStatus>
      <FriendName>{ name}</FriendName>
</FriendItem>)  
}

Friend.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name:PropTypes.string
}