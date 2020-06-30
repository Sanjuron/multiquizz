import React, { Component } from 'react';
import quizzes from "../datas/quizzes.json";

class Litterature extends Component {
    state = {  }
    render() { 


        let litterature = quizzes.filter( quizz => quizz.categoryId === 3);

         let litteratureList = litterature.map(book => {
            return (
                <h2>{book.title}</h2>
            )
        })
        return ( 
            <div className="litterature">
                <h1 className="title">Tous les quizz Littérature !</h1>
                {litteratureList}
            </div>
         );
    }
}
 
export default Litterature;