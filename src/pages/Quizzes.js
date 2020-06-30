import React, { Component } from 'react';
import quizzes from '../datas/quizzes.json';

class Quizzes extends Component {
    state = { 
        quizzes: []
     }


    render() { 

        let quizzList = quizzes.map(quizz => {
            return ( 
                <h2>{quizz.title}</h2>
            )
        })


        return (  
            <div className="quizzes">
                <h1 className="title">Tous les Quizz!</h1>
                
                    {quizzList}
                    
            </div>
        );
    }
}
 
export default Quizzes;