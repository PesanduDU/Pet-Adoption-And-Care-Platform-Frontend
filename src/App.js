import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import PetCard from './components/PetCard.tsx';
import LastFooter from './components/LastFooter.js';
import FirstFooter from './components/FirstFooter.js';
import PetTalk from './components/PetTalk.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js'
import NopPage from './pages/NopPage.js';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Carousel/>
      <PetTalk/>
      <PetCard/>
      <LastFooter/>
      <FirstFooter/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NopPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
