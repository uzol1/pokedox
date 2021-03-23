import pokemon from '../../assets/images/quintessential.jpeg'
import './Pokemon.css'
import { Link } from 'react-router-dom'
const Pokemon = (props) => {
    return (
        <div className="col-3">
            <Link to={'/pokemon/' + props.id} >
                <div className="card" >
                    <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                </div>
            </Link>
        </div>

    );

}
export default Pokemon