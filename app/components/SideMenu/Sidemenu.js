import Sidemenustyle from '../../css/slidemenu.css';
import Card from '../Cards/Card';
import PokeSec from '../homePage';
import PokemonSeccion from '../pokemon';

function Sidemenu({ onTypeClick }) {
    const types = [
      "fire", "water", "grass", "electric", "ice", "fighting", "poison",
      "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", 
      "dragon", "steel", "fairy", "normal"
    ];
  
    return (
      <div className="sidebar">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              className={`type ${type}`}
              onClick={() => onTypeClick(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </li>
          ))}
        </ul>
        console.log(types)
      </div>
    );
  }
  
export default Sidemenu;