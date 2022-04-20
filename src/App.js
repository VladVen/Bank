import './App.css';
import Topic from './components/topic';
import Links from './components/sideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mono from './components/mono/mono';
import Privat from './components/privat/privat';
import Oshad from './components/oshad/oshad';
import Pumb from './components/pumb/pumb';

function App() {
  return (<BrowserRouter>
    <div className="App">
      
    <Topic />
    <Links />
    <Routes>
    <Route path='/privat' element={<Privat />} />
    <Route path='/mono' element={<Mono />} />
    <Route path='/oshad' element={<Oshad />} />
    <Route path='/pumb' element={<Pumb />} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}



export default App;
