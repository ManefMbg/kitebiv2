import "../CSS/Search.css";

const Search = (props) => {
  return (
    <div className='search-area'>
        <form onSubmit={props.searchBook} action="">
            <input onChange={props.handleSearch} type="text" />
            <button id="btn" type='btn'>Search</button>
        </form>
    </div>
    
  )
}

export default Search