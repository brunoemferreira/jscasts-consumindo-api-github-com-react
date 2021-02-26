

const UserRepos = (props) => {
  return (
    <div className="container">
      <h1>Repositories</h1>
      {
        props.repo.map((repos) => (
          <div key={repos.key} className="img-thumbnail mb-4 p-4">
            <div className="caption">
              <h3>{repos.name}
                <span className="badge badge-secondary">{repos.stargazers_count} ⭐</span>
              </h3>
              <p>{repos.description}</p>
              <p>
                <a href={repos.html_url} className="btn btn-primary" role="button">Repository</a>
                <a href={repos.html_url + '/issues'} className="btn btn-outline-dark" role="button">Issues ({repos.open_issues}) </a>
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default UserRepos;

