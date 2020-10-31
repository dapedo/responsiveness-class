import Header from './components/Header';
import Navigation from './components/Navigation';
import Pagination from './components/Pagination';
import Profile from './components/Profile';
import Search from './components/Search';
import Pokemon from './components/pokemon';

function App() {
  return(
    <div>
      <Header/>
      <Profile/>
      <Navigation/>
      <Search/>
      <Pokemon/>
      <Pagination/>
    </div>
  )
}

export default App
