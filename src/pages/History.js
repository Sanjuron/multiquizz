import React, { Component } from 'react';
import quizzes from "../datas/quizzes.json";

class History extends Component {
    state = {  }
    render() { 

        // let id = this.props.match.params.id;        
        // console.log(id);

        let history = quizzes.filter( quizz => quizz.categoryId === 2);
         let historyList = history.map(film => {
            return (
                <h2>{film.title}</h2>
            )
        })


        return ( 
            <div className="history">
                <h1 className="title">Tous les quizz Histoire!</h1>
                {historyList}
            </div>
         );
    }
}
 
export default History;