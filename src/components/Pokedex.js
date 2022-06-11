import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import Busca from './busca';

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props

    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const onRightClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }
    return (
        <div className="back-list">
            <div className="top-container">
                <Busca />

                <h1>Pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />

            </div>
            <div>
                {loading ? (<div><img src="https://c.tenor.com/8sTMqGWjYAQAAAAC/ball-pokemon.gif" alt="load" /></div>) : (
                    <div>
                        {pokemons && pokemons.map((pokemon, index) => {
                            return (
                                
                                <div className="pokedex">

                                    <Pokemon key={index} pokemon={pokemon} />
                                </div>
                            )
                        })}

                    </div>
                )}
            </div>
        </div>
    )
}


export default Pokedex