import React, { Component } from 'react';
import quizzes from "../datas/quizzes.json";

class Home extends Component {
    state = { 
        quizzes : []
     }
    render() { 
        let quizzList = quizzes.map(quizz => {
            return ( 
                <h2>{quizz.title}</h2>
            )
        })

        return ( <div className="home">
            <h1 className="title columns is-centered">Bienvenue sur l'application Multiquizz</h1>
            {quizzList.slice(0, 5)}
        </div> );
    }
}
 
export default Home;