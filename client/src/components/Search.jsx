import "../CSS/Search.css";

const Search = (props) => {
  return (
    <div className='search-area'>
        <form onSubmit={props.searchBook} action="">
            <input onChange={props.handleSearch} type="text" placeholder="Search by Title"/>
            <button id="btn" type='btn'>Search</button>
        </form>
    </div>
    
  )
}

export default Search