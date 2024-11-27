import Navbar from "../components/navbar/navbar";
import PokemonSeccion from "../components/pokemon";
import Banner from "./Banner/Banner";
import stile from "../css/Banner.css"
import Card from "./Cards/Card";
import styleCard from "../css/card.css";
import Sidemenu from "./SideMenu/Sidemenu";



function PokeSec(){
    return (
        <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                {/* <div className="col-md-4">
                    <Sidemenu/>
                </div> */}
                <div className="col-md-12">
                <PokemonSeccion/>
                </div>
            </div>
        </div>
        
    
        </div>
        
    );
    console.log('holas');
}

  
export default PokeSec;