import React, { Component } from 'react';
import categories from "../datas/categories.json";
import quizzes from "../datas/quizzes.json";


class Cinema extends Component {
    state = { 
        cinema : []
     }

    render() { 

        // let listCategory = categories.filter(category =>
        //     category.id ===1);
        // console.log(listCategory);

        let cinema = quizzes.filter( quizz => quizz.categoryId === 1);

         let cinemaList = cinema.map(film => {
            return (
                <h2>{film.title}</h2>
            )
        })
       



        return ( 
            <div className="cinema">
                <h1 className="title">Tous les quizz Cinémas !</h1>
                {cinemaList}
            </div>
         );
    }
}
 
export default Cinema;