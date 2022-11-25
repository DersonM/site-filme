import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/

//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=c2dec9e1ef6d1e1a06f08b745a829820&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;