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
import UserLogIn from './pages/UserLogIn.js'
import NopPage from './pages/NopPage.js';
import PetsComponent from './components/aaa.js';
import PetsDetails from './data/PetsDetails.js';

function App() {
  return (
    <div className="App">
      {/* <PetsComponent/> */}
      {/* <PetsDetails/> */}
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
          <Route path='/signup' element={<UserLogIn/>}/>
          <Route path='*' element={<NopPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
