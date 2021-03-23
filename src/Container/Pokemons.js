import { useEffect, useState } from 'react'
import Pokemon from "../Components/Pokemon/pokemon";
import Search from "../Components/Search/Search"
import "../Container/Pokemons.css"
import axios from 'axios'
const Pokemons = (props) => {

    const [pokemons, setPokemons] = useState({
        datas: [],
        errormsg: '',
        error: false
    })
    const [searchRes, setSearch] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
            const temp = response.data.results.map((result, index) => { return { name: result.name, id: index + 1 } })
            setPokemons({ ...pokemons, datas: temp })
            setSearch(temp)
        }).catch((error) => {
            setPokemons({ ...pokemons, error: true, errormsg: error.message })
        })
    }, [])

    const pokemonFilter = (searchData) => {
        setSearch(searchData)
    }

    // let data = pokemons.errormsg;
    // if (!pokemons.error) {
    //     data = pokemons.datas.map((pokemon, index) => {
    //         return <Pokemon name={pokemon.name} id={index + 1} key={pokemon.name} />
    //     })
    // }

    return (
        <div>
            <section className="search">
                <Search changed={pokemonFilter} pokes={pokemons.datas} />
            </section>
            <section className="pokemon-container">
                <div className="container">
                    <div className="row">
                        {/* {data} */}
                        {pokemons.errormsg ? pokemons.errormsg : searchRes.map((pokemon, index) => {
                            return <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.name} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Pokemons;