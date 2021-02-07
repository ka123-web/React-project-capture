import React from 'react';
import {useHistory,Link} from 'react-router-dom';

const MovieDetails = () =>
{
    const history = useHistory();
    console.log(history);
    return(
    <div>
        <Link to="">
        <h1>Movidedetails</h1>
        </Link>
    </div>
    )
}

export default MovieDetails;