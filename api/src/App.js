import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     <NavBar/>

        <UserList/>
        
      
    </div>
  );
}

export default App;
