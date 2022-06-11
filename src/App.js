import React, { useEffect, useState } from 'react';
import Pokedex from './components/Pokedex';
import ShowPokemon from './page/ShowPokemon';
import './App.css';
import { getPokemonData, getPokemons } from './components/Api';

// Import das rotas
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Import dos temas
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/theme'
import GlobalStyles from './theme/globalStyles'


function App() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const [isDarkTheme, setIsDarkTheme] = useState(false)


  const itensPerPage = 25

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });


      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))

    } catch (error) {
      console.log("error", error)
    }

  }

  useEffect(() => {
    fetchPokemons();
  }, [page])


  return (
    <div className="App">
     <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>

        <GlobalStyles />
      
      <button className="tema" 
          onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Alterar tema</button>
        <BrowserRouter>

<Routes>

<Route element={<ShowPokemon />} path="/details/:name" />
<Route path='*' element={<div><h1>Pokémon não encontrado</h1><img src="https://i.pinimg.com/originals/60/cf/06/60cf06d9caf6ec66df3d0c6fe3318d19.gif" alt="" />
    </div>} />


<Route element={<Pokedex
  pokemons={pokemons}
  loading={loading}
  setPage={setPage}
  page={page}
  totalPages={totalPages}
/> } path="/" />

</Routes>

</BrowserRouter>   
    </ThemeProvider>
     


  

    </div>
  );
}

export default App;
