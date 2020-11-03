import './index.css'
import { HiOutlineSearch } from 'react-icons/hi'

const Search = () => {
  return (
    <div className="Search">
      <input type="text" placeholder="Procure um pokemon"></input>
      <HiOutlineSearch size="20" style={{ position: 'absolute', right: '0' }} />
    </div>
  )
}

export default Search
