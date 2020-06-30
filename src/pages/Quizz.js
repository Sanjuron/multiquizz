import React, { Component } from 'react';

class Quizz extends Component {
    state = { 
        quizz: {}
     }

    render() { 

        let slug = this.props.param.match.slug;
        console.log(slug);

        return ( 
            <div className="quizz">
                <h1>Quizz</h1>
            </div>
         );
    }
}
 
export default Quizz;