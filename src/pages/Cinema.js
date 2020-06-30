import React, { Component } from 'react';
// import categories from "../datas/categories.json";
import quizzes from "../datas/quizzes.json";


class Cinema extends Component {
    state = { 
        films: []
     }

    render() { 

        let cinema = quizzes.map(film => {
            // let specCinema = q
            return ( 
                <h2>{film.title}</h2>
            )
        })

        return ( 
            <div className="cinema">
                <h1 className="title">Tous les quizz Cinémas !</h1>
                {cinema}
            </div>
         );
    }
}
 
export default Cinema;