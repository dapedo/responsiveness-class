import './index.css';
import {HiOutlineSearch} from 'react-icons/hi'

const Search = () => {
    return(
        <div className='Search'>
            <input 
                type='text' 
                placeholder='Procure um pokemon'
            ></input>
            <HiOutlineSearch/>
        </div>
    )
}

export default Search;