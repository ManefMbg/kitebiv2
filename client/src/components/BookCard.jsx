import "../CSS/BookCard.css";

const BookCard = (props) => {
  return (
    
        <div className="desc">
            <img id="book-image" src={props.image} alt="bookimage" />
            <h2 id="book-title">{props.title}</h2>
            <h3 id="book-author">{props.author}</h3>
            <p id="book-published">{props.published}</p>
            
            <button id="book-preview"><a href={props.previewLink} target="blank">Preview</a></button>
        </div>

  )
}

export default BookCard