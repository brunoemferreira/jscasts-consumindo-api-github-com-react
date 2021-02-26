import { useEffect, useState } from 'react';
import SearchUser from '../components/SearchUser';
import UserInfo from '../components/UserInfo';


const GitHub = () => {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);

  useEffect(() => {

  }, []);

  const handleUpdateUser = (userInfo) => {
    setUser(userInfo);
    console.log(user);
  }

  function handleUpdateRepos(reposInfo) {
    setRepos(reposInfo);
    console.log(repos);
  }

  return (
    <div className="container">
      <SearchUser updateUser={handleUpdateUser}
        updateRepos={handleUpdateRepos} />
      <UserInfo user={user} repos={repos} />
    </div>
  )
}

export default GitHub;