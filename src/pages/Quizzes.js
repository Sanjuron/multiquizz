import React, { Component } from 'react';
import quizzes from '../datas/quizzes.json';
import {Link} from "react-router-dom";


class Quizzes extends Component {
    state = { 
        quizzes: []
     }


    render() { 

        let quizzList = quizzes.map(quizz => {
            let slug = this.props.match.params.slug;
            console.log(slug);
            let url = "/quizzes/" + quizz.slug;

            return ( 
                <Link to={url}><h2>{quizz.title}</h2></Link>
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