import Header from './components/Header'
import Navigation from './components/Navigation'
import Pagination from './components/Pagination'
import Search from './components/Search'
import Pokemon from './components/Pokemon'
import './styles/styles.css'
import './app.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="content-container">
        <Search />
        <div className="pokemon-container">
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
        </div>
        <Pagination />
      </div>
      <div className="footer">
        <p>&copy; Todos os direitos reservados à Trainee Gatinho</p>
      </div>
    </div>
  )
}

export default App
