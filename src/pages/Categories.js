import React, { Component } from 'react';
import categories from "../datas/categories.json";

class Categories extends Component {
    state = { 
        categories : []
     }



    

    render() { 


        let categoryList = categories.map(category => {
            return ( 
                <h2>{category.title}</h2>
            )
        })

        return ( 

            <div className="categories">
                <h1 className="title">Toutes les catégories!</h1>
                <div className="categories__list">
                {categoryList}
                </div>
            </div>
         );
    }
}
 
export default Categories;