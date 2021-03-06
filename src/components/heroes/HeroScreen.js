import { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';
// import batman from "../../assets/heroes/dc-batman.jpg"; // Importación de recurso estático
const heroImages = require.context("../../assets/heroes", true);

export const HeroScreen = ( {history} ) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        history.goBack();
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src = {`../assets/heroes/${heroeId}.jpg`}  // Desde public/assets
                    // src = { batman } // Import
                    src={heroImages(`./${ heroeId }.jpg`).default }
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    alt={superhero}
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
                    <li className="list-group-item"> <b>First Appearance:</b> { first_appearance } </li>
                </ul>
                <h5> Characters </h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
