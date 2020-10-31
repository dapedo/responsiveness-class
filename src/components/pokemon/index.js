import PokeImage from '../../assets/bulbassauro.svg'
import './styles.css'

function Pokemon() {
  return (
    <div className="pokemon-card">
      <img src={PokeImage} alt="Pokemon Top" />
      <div className="info">
        <h3>#132 Bulbassauro</h3>
        <div className="types">
          <div
            className="type-background"
            style={{ backgroundColor: '#26AE60' }}
          >
            <span className="type">GRASS</span>
          </div>
          <div
            className="type-background"
            style={{ backgroundColor: '#9B51E0' }}
          >
            <span className="type">POISON</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
