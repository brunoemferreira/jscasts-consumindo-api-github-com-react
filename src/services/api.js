import axios from "axios";

// Cria uma baseURL para não precisar ficar digitando o link da api a todo momento
const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;