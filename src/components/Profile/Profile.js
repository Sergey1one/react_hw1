import PropTypes from 'prop-types';
import {ProfileStyle,Name} from './Profile.style'

export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return <ProfileStyle>
        <div class="description">
            <img
                src={avatar}
                alt={username}
                class="avatar"
            />
            <Name>{username}</Name>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{likes}</span>
            </li>
        </ul>
    </ProfileStyle>
}





Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number
}

