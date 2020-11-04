import './index.css'
import { HiOutlineSearch } from 'react-icons/hi'

const Search = () => {
  return (
    <div className="Search">
      <div className="input-container">
        <input type="text" placeholder="Procure um pokemon" />
        <HiOutlineSearch size="20" />
      </div>
    </div>
  )
}

export default Search
