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
import Gallery from './pages/GalleryPage.js';
import ProductPage from './pages/ProductPage.js';
import LogInPage from './pages/LogInPage.js';
import PetMoreDetailsPage from './pages/PetMoreDetailsPage.js';

function App() {
  return (
    <div className="App">
      {/* <PetsComponent/> */}
      {/* <PetsDetails/> */}
      {/* <Header/>
      <Carousel/>
      <PetTalk/> */}
      {/* <PetCard/> */}
      {/* <LastFooter/>
      <FirstFooter/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/signup' element={<UserLogIn/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/products' element={<ProductPage/>}/>
          <Route path='*' element={<NopPage/>}/>
          <Route path='/login' element={<LogInPage/>}/>
          <Route path='/moreDetails' element={<PetMoreDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
