import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import PetCard from './components/PetCard.tsx';
import LastFooter from './components/LastFooter.js';
import FirstFooter from './components/FirstFooter.js';
import PetTalk from './components/PetTalk.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <PetTalk/>
      <PetCard/>
      <LastFooter/>
      <FirstFooter/>
    </div>
  );
}

export default App;
