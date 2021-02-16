import api from './api';

const GitHubUser = (username) => {
  return api.get(`users/${username}`)
}



export default GitHubUser;

