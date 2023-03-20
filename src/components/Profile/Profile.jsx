import PropTypes from 'prop-types';
import {ProfileCard, ProfileList, ProfileInfo} from './Profile.styled';

export const Profile = (
 {username, tag, location,  avatar,
    stats:{followers, views, likes}}) => {
       return <ProfileCard>
  <ProfileInfo>
    <img
      src={avatar}
      alt="User avatar"/>
    <p >{username} </p>
    <p >@{tag}</p>
    <p >{location}</p>
  </ProfileInfo>
  <ProfileList>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ProfileList>
</ProfileCard>;
}

Profile.propTypes = {
  user: PropTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}),
}),
};



  

