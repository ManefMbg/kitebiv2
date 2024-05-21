import "../CSS/BookCard.css";

const BookCard = (props) => {
  return (
    <div className="card-container">
        <img src={props.image} alt="" />
        
        <div className="desc">
            <h2 id="book-title">{props.title}</h2>
            <h3 id="book-author">{props.author}</h3>
            <p id="book-published">{props.published}</p>
        </div>
    </div>
  )
}

export default BookCard