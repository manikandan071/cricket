import './App.css';
import Toss from './pages/toss/toss';
import Won from './pages/toss/result/won';
import Loss from './pages/toss/result/loss';
import Playerlist from './pages/player/playerlist';
import Selectplayer from './pages/selectplayer/selectplayer';
import Result from './pages/result/result';
import Aus from './pages/result/aus/aus';
import Ind from './pages/result/ind/ind';
// import Selectbowlers from './pages/bowlerselect/'
import Home from './pages/home/home';
import Selectbowlers from './pages/selectplayer/selectbowlers'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Toss />}/>
        <Route path='Won' element={<Won />}/>
        <Route path='Loss' element={<Loss />}/>
        <Route path='Players' element={<Playerlist />}/>
        <Route path='Selectplayer' element={<Selectplayer />}/>
        <Route path='SelectBowler' element={<Selectbowlers />}/>
        <Route path='Result' element={<Result />}/>
        <Route path='Aus' element={<Aus />}/>
        <Route path='Ind' element={<Ind />}/>
        <Route path='Home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
