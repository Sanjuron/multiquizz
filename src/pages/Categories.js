import React, { Component } from 'react';
import categories from "../datas/categories.json";
import {Link} from "react-router-dom";

class Categories extends Component {
    state = { 
        categories : []
     }



    

    render() { 


        let categoryList = categories.map(category => {
            let url = "/categories/" + category.slug;
            return ( 
                <Link to={url}><h2>{category.title}</h2></Link>
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