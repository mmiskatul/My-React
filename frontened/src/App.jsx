import  './App.css'
import MovieCard from './component/MovieCard';
import Favorite from './pages/favorite';
import Home from './pages/Home';
import {Routes,Route} from  'react-router-dom'
import Navbar from './component/Navbar';

function App() {
  
 return(
  <div>
    <Navbar/>
   <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Favorite/>}/>
    </Routes>
   </main>
   </div>
  
 
 );

}


export default App
