// import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
function App() {


  return (
    <BrowserRouter>
      <div className="App ui container">
      {
      <>
      
      <Header/>
      <Switch>
      <Route  path="/about" component={About} />
      <Route  path="/" component={Main} />
      </Switch>
        
      </>
      
      }
    </div>
  
    </BrowserRouter>
    
    
    
  );
}

export default App;
