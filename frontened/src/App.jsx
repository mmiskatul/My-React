import  './App.css'
import MovieCard from './MovieCard';

function App() {
  const movieNumber = 1;
  
 return(
  <>
   {movieNumber===1?
   (<MovieCard movie={{title:"tim's Film",release_date :"2024"}}/> )
   :
   (<MovieCard movie={{title:"joes Film",release_date :"2024"}}/>)
   }
  </>
 );

}


export default App
