import PropTypes from 'prop-types';

export const Friend = ({ status,avatar,name}) =>
{
  return (<li class="item">
      <span class="status">{ status?"Online":"Offline"}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{ name}</p>
</li>)  
}

Friend.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name:PropTypes.string
}