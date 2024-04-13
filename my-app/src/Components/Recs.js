import React from 'react';
import CardSlider from './RecsCard';
import book1 from '../images/book1.jpg'
import book2 from '../images/book2.jpg'
import book3 from '../images/book3.jpg'
import book4 from '../images/book4.jpg'

function Recs() {
    const movies = [
        {
            title: 'Movie 1',
            imageUrl: book1,
        },
        {
            title: 'Movie 2',
            imageUrl: book2,
        },
        {
            title: 'Movie 3',
            imageUrl: book3,
        },
        {
            title: 'Movie 3',
            imageUrl: book4,
        },
    ];

    return (
        <div>
            <h1><center>Books</center></h1>
            <br></br>
            <br></br>
            <CardSlider items={movies} />
        </div>
    );
}

export default Recs;
