import './App.css'
import Moviecard from './components/MovieCard';

function App() {
  const movieNumber = 1;
  


  return(
    <>
    {movieNumber===1}?:(
    <Moviecard movie={{title: "Vankar Productions", release_date: "2025" }}/>)
    <Moviecard movie={{title: "Aravind Productions", release_date: "2025" }}/>
    </>
  );
}

export default App
