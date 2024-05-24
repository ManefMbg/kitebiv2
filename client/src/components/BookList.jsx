import BookCard from "./BookCard"


const BookList = (props) => {
  return (
    <div className='card-container'>
        {
            props.books.map((book, i) => {
                return <BookCard
                    key={i}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    published={book.volumeInfo.publishedDate}
                    previewLink={book.volumeInfo.previewLink}
                />
            })
        }
    </div>
  )
}

export default BookList