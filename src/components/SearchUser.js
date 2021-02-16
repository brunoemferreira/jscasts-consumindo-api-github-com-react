import React from 'react';

function SearchUser() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('clicou');
  }

  return (
    <div className="jumbotron">
      <h1>GitHub Info</h1>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>UserName</label>
            <input type="text"
              className="form-control"
              placeholder="Ex: brunoemferreira" />
          </div>
          <button className="btn btn-primary">Buscar</button>
        </form>
      </div>
    </div>
  );
}

export default SearchUser;