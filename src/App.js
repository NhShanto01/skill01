import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Component/Shared/Header';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Button className='btn-primary'>click</Button>
    </div>
  );
}

export default App;
