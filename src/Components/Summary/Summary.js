import axios from 'axios'
import { useEffect, useState } from 'react'
const Summary = (props) => {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`).then((response) => {
            const temp = response.data
            const types = temp.abilities.map((ability => {
                return ability.ability.name
            }))
            console.log(response.data)
            setPokemon({ name: temp.name, types: types })
        })
    }, [])

    console.log(props.match)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 col-md-5 col-lg-5 ">
                    <div className="card" >
                        <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.match.params.id}.png`} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{pokemon.name}</h5>
                            <h3>
                                {pokemon.types ? (pokemon.types.join(' ')) : null
                                }
                            </h3>
                            <button type="button" className="btn btn-primary" onClick={() => { props.history.push('/') }}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Summary
