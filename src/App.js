import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import  Home  from "./component/Home/Home";
import  Header  from "./component/Header/Header";
import  Footer  from "./component/Footer/Footer";
import  PageNotFound  from "./component/PageNotFound/PageNotFound"
import  MovieDetail  from "./component/MovieDetail/MovieDetail"

function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header> 
        
          <Route path="/" component={Home} />
          <Route path='/movie/:imdbID' component={MovieDetail} />
          <Route component={PageNotFound} />
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
