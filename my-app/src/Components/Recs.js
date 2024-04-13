import React from 'react';
import CardSlider from './RecsCard';
import movie1 from '../images/cryptos.jpg'
import movie2 from '../images/fds.jpg'
import movie3 from '../images/gold.avif'

function Recs() {
    const movies = [
        {
            title: 'Movie 1',
            imageUrl: movie1,
        },
        {
            title: 'Movie 2',
            imageUrl: movie2,
        },
        {
            title: 'Movie 3',
            imageUrl: movie3,
        },
        {
            title: 'Movie 3',
            imageUrl: movie1,
        },
    ];

    return (
        <div>
            <h1>Movies</h1>
            <CardSlider items={movies} />
        </div>
    );
}

export default Recs;
