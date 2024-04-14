import React from 'react';
import {books, movies} from './RecsCardData.js'
import RecsCard from './RecsCard';

function Recs() {
    return (
        <div>
            <h1 style={{padding: '80px 0 0 0 '}}><center>Books</center></h1>
            <br></br>
            <br></br>
            <RecsCard items={books} />
            <br></br>
            <br></br>
            <h1><center>Movies</center></h1>
            <br></br>
            <br></br>
            <RecsCard items={movies} />

        </div>
    );
}

export default Recs;
