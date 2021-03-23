import { useEffect, useState } from 'react'
import axios from 'axios'
import "../Search/Search.css"
const Search = (props) => {
    const [inputValue, setInputValue] = useState('')
    // console.log('search', props.pokes);

    useEffect(() => {
        let searchData = props.pokes.filter((pokemon, index) => {
            return pokemon.name.includes((inputValue))
        })
        props.changed(searchData);
    }, [inputValue])

    return (
        <div>
            <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder="Search.."></input>
        </div >
    );
}
export default Search