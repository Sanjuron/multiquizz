import React, { Component } from 'react';
import categories from "../datas/categories.json";

class Category extends Component {
    state = { 
        category : {}
     }
    render() { 

        let id = this.props.match.params.slug;


        let category = categories.map( category => category === category.id);
        console.log(category);

        let categoryList = category.map(category => {
           return (
               <h2>{category.title}</h2>
           )
       })

        return ( 
            <div className="category">
            {categoryList}
            </div>
         );
    }
}
 
export default Category;