import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages
import Home from "./pages/Home";
import Categories from './pages/Categories';
import Quizzes from './pages/Quizzes';
import History from './pages/History';
import Litterature from './pages/Litterature';
import Cinema from './pages/Cinema';
import Category from "./pages/Category";


//components
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
    <div className="App ">
      <Navbar />
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route path="/categories/:slug" component={Category} /> 
      <Route path="/quizzes" component={Quizzes} />
      </Switch>


    </Router>
  );
}

export default App;
