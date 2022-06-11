import React from "react";
import { Link } from "react-router-dom"

const Pokemon = (props) => {
    const { pokemon } = props
    const url = "/details/" + pokemon.name
    return (

        <div >

            <Link to={url} >
                <div className="pokemon-card ">


                    <img className="img-card" src={pokemon.sprites.other.home.front_default}
                        alt={pokemon.name} />

                    <div className="card-top">

                        <div className="id"><b>#{pokemon.id}</b></div>
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
        </div>
    )
}


export default Pokemon



