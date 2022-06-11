import React, { useState } from "react";
import { searchPokemon } from "./Api";
import { Link } from "react-router-dom"


const Busca = () => {


    
    const [search, setSearch] = useState('dito')
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }


    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)



    }


    return (
        <div className="nav ">
            <div className="imgNav" >
            </div>
            <div>

                <div className="div-search">
                    <input className="search" type="search" placeholder="Procure seu Pokemon" onChange={onChangeHandler} />
                    <input className="search-btn" type="submit" value="Procurar" onClick={onButtonClickHandler} />
                </div>

            </div>


            {pokemon ? (
                <Link to={"/details/" + pokemon.name} >
                    <div className=" srch">

                        <div>
                            <img className="img-card" src={pokemon.sprites.other.home.front_default}
                                alt={pokemon.name}
                            />
                        </div>
                        <div className="card-top">

                            <div className="id">#{pokemon.id}</div>
                            <h3>{pokemon.name}</h3>
                        </div>


                        <div className="card-bottom">
                            {pokemon.types.map((type, index) => {
                                return (
                                    <div key={index} className={type.type.name === 'grass' ? ' pokemon-type grass' :
                                        type.type.name === 'fire' ? ' pokemon-type fire' :
                                            type.type.name === 'poison' ? ' pokemon-type poison' :
                                                type.type.name === 'water' ? ' pokemon-type water' :
                                                    type.type.name === 'bug' ? ' pokemon-type bug' :
                                                        type.type.name === 'fairy' ? ' pokemon-type fairy' :
                                                            type.type.name === 'ground' ? ' pokemon-type ground' :
                                                                type.type.name === 'flying' ? ' pokemon-type flying' :
                                                                    type.type.name === 'electric' ? ' pokemon-type electric' :
                                                                        type.type.name === 'fighting' ? ' pokemon-type fighting' :
                                                                            type.type.name === 'psychic' ? ' pokemon-type psychic' :
                                                                                type.type.name === 'ice' ? ' pokemon-type ice' :
                                                                                    type.type.name === 'ghost' ? ' pokemon-type ghost' :
                                                                                        type.type.name === 'rock' ? ' pokemon-type rock' :
                                                                                            type.type.name === 'dragon' ? ' pokemon-type dragon' :
                                                                                                type.type.name === 'dark' ? ' pokemon-type dark' :
                                                                                                    type.type.name === 'steel' ? ' pokemon-type steel' :
                                                                                                        type.type.name === 'normal' ? ' pokemon-type normal' : null}><b>{type.type.name}</b></div>
                                )
                            })}
                        </div>



                    </div></Link>
            ) : null}
        </div>

    )
}

export default Busca
