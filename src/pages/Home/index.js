
import {useEffect, useState} from 'react';
import api from '../../services/api';

//https://api.themoviedb.org/3/movie/now_playing?api_key=c2dec9e1ef6d1e1a06f08b745a829820&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);


    useEffect(()=>{
        async function loadfilme(){
            const resposta = await api.get('/movie/now_playing', {
              params:{
                api_key:'c2dec9e1ef6d1e1a06f08b745a829820',
                language:'pt-BR',
                page: 1,
              }  
            })
            console.log(resposta)
        }

        loadfilme();
    }, [])
    return(
        <h1>Página inicial</h1>
    )
}
export default Home;