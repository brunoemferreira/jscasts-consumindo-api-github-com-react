import { useState } from "react";
import axios from 'axios';

// Recebendo como props funções que são executadas e retornam o valor para traz
const SearchUser = ({ updateUser, updateRepos }) => {
  const [username, setUsername] = useState('');

  // Acessa a api e traz os dados do usuario do github
  async function getByUsername(username) {
    return await axios.get(`https://api.github.com/users/${username}`)
      .then((response) => updateUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  //Acessa a Api e tras os repositorios dos usuarios
  async function getReposByUsername(username) {
    return await axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => updateRepos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  // Função que é ativada no submit do formulario
  function handleSubmit(e) {

    console.log(username);

    getByUsername(username);
    getReposByUsername(username);

    e.preventDefault();
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
              placeholder="EX: brunoemferreira"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit"
            className="btn btn-primary"
          >Buscar</button>
        </form>
      </div>
    </div>
  )
}

export default SearchUser;