
import './HomePage.css';
import Home from './components/Home';
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
 
    <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
    </Routes>

    </div>
  );
}

export default App;
