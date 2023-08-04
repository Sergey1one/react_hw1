import PropTypes from 'prop-types';
import {AvatarImg, Description, ProfileStyle,Tag,UserName, LocationP, Stats,StatItem, Label, Quantity} from './Profile.styled'

export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return <ProfileStyle>
        <Description>
            <AvatarImg
                src={avatar}
                alt={username}
                class="avatar"
            />
            <UserName>{username}</UserName>
            <Tag>@{tag}</Tag>
            <LocationP>{location}</LocationP>
        </Description>

        <Stats>
            <StatItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatItem>
            <StatItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatItem>
            <StatItem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatItem>
        </Stats>
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

