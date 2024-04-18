import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import PetCard from './components/PetCard.tsx';



function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <PetCard/>
    </div>
  );
}

export default App;
