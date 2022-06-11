
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { searchPokemon } from "../components/Api";
import { Link } from "react-router-dom"



const ShowPokemon = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState([name])

  const see = async () => {

    try {
      const result = await searchPokemon(name)
      setPokemon(result)

    } catch (error) {
      
    }



  }
  useEffect(() => {
    see();
  }, [])
  return (
    <div>
        {pokemon ? (
  <div className="details ">

  <div className="bio-details">
    {<Link to='/'> <div className="back"><b>X</b></div></Link>}
    <b>#{pokemon.id}</b>

    <div className="name-details"><b> {pokemon.name}</b></div>

  


  </div>
  <div>
    {pokemon.sprites ? (
      <img className="img-details" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    ) : (
      null
    )
    }
  </div>
  <div className="type-details">
    {pokemon.sprites ? (
      pokemon.types.map((type, index) => {
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
      })) : (
      null
    )

    }
  </div>

  </div>) : (
    <div><h1>Pokémon não encontrado</h1><img src="https://i.pinimg.com/originals/60/cf/06/60cf06d9caf6ec66df3d0c6fe3318d19.gif" alt="" />
    </div>
          
          )
        }
  
      </div>

  )

}





export default ShowPokemon