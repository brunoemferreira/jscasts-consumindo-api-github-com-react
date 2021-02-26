import UserRepos from './UserRepos';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
  if (props.user) {
    return (
      <div className="row">
        <div className="col-lg-4">
          <img className="rounded-circle" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
          <h2>{props.user.login}</h2>
          <p>{props.user.name}</p>
          <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
          <p><a className="btn btn-info" href={props.user.html_url} role="button">View details</a></p>
        </div>
        <div className="col-lg-8">
          <UserRepos repo={props.repos} />
        </div>
      </div>
    )
  } else {
    return null
  }
}

UserInfo.prototype = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
}

export default UserInfo;