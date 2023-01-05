import logo from './logo.svg';
import './App.css';
import Header from './Component/Shared/Header';
import Home from './Component/Home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      
    </div>
  );
}

export default App;
