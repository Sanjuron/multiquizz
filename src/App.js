import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//pages
import Home from "./pages/Home";
import Categories from './pages/Categories';
import Quizzes from './pages/Quizzes';
import History from './pages/History';
import Litterature from './pages/Litterature';
import Cinema from './pages/Cinema';


//components
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
    <div className="App ">
      <Navbar />
    </div>
      <Route exact path="/" component={Home} />
      <Route path="/categories" component={Categories} />
      <Route path="/quizzes" component={Quizzes} />
      <Route path="/history" component={History} />
      <Route path="/cinema" component={Cinema} />
      <Route path="/Litterature" component={Litterature} />


    </Router>
  );
}

export default App;
