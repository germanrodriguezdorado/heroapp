import { useMemo } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ( { history } ) => {

    const location = useLocation();
    const { q = "" } = queryString.parse( location.search );

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = values;

    const heroesFilteres = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    };

    return (
        <div>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr/>
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary mt-1"
                        >
                            Search
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                    (q === "")
                    &&
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                    }

                    {
                        (q !== "" && heroesFilteres.length === 0)
                        &&
                        <div className="alert alert-warning">
                            There's no hero with { q }
                        </div>
                    }

                    {
                        heroesFilteres.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
