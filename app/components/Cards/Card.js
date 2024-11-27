function Card(pokeData) {
    

    return (
        <div className="container-card col-md-4 mb-4">
            <div className="card">
                <div className={`ImgP ${pokeData.types[0]}`}>
                    <img className="pokeimagen" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.pokeID}.png`}
                    />
                </div>
                <div className="idp d-flex align-items-start ">
                        <a>{pokeData.pokeID}</a>
                    </div>
                <div className="container-name d-flex justify-content-between ">
                    <div className='pokemon-name' key={pokeData.name}>
                        <a >
                            {pokeData.name}
                        </a>
                    </div>
                    <div className="pokemon-type d-flex justify-content-between gap-2">
                        {pokeData.types.map((type, index) => (
                            <div  key={index} >
                                <img src={`/img/${type}.svg`} alt='' />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>


    );
}

export default Card;