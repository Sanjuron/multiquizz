import React, { Component } from 'react';
import categories from "../datas/categories.json";
import quizzes from "../datas/quizzes.json";

class Category extends Component {
    state = { 
        quizzs : []
     }
    render() { 

        
        let slug = this.props.match.params.slug; // récupére le slug
        console.log(slug);

        let category = categories.filter(category => category.slug === slug)[0].id;
        console.log(category); // renvoie undefined

        let quizzs = quizzes.filter(quizz => quizz.categoryId === category);
        console.log(quizzs); // objet récupéré, créer "variable qui modifie le setState (pas sûr) pour inclure les quizz dans le state"

        // quizzs.map(quizz => {
        //             return ( 
        //         <h2>{quizz.title}</h2>)
      
        // })



    //     let category = categories.map( category => category === category.id);
    //     console.log(category);

    //     let categoryList = category.map(category => {
    //        return (
    //            <h2>{category.title}</h2>
    //        )
    //    })

        return ( 
            <div className="category">
            {/* {quizzs} */}
            </div>
         );
    }
}
 
export default Category;