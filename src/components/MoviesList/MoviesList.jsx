import MovieItem from "components/MovieItem/MovieItem";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    
    return ( 
        <ul className={css.list}>
            {movies?.map(({id, title, poster_path, vote_average}) => (
                <MovieItem
                    key={id}
                    id={id}
                    title={title}
                    poster={poster_path}
                    rate={vote_average}
                    path={{from: location}}
                />
            ))}
        </ul>
     );
}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default MoviesList;