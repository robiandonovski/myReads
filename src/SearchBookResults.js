import React, { Component } from 'react'
import propTypes from 'prop-types'
import BookDetails from './BookDetails';

class SearchBookResults extends Component {

  static propTypes = {
    userBooks: propTypes.array.isRequired,
    resultBooks: propTypes.array.isRequired,
    shelfOnChange: propTypes.func.isRequired
  }

  handleOnShalfChange = (book, shelf) => {
    this.props.shelfOnChange(book, shelf)
  }

  getShelfForBook = (bookDetails) => {
    var bookShelf = 'none';

    var book = this.props.userBooks.find((book) => (
      book.id === bookDetails.id
    ))

    if (book) {
      bookShelf = book.shelf
    }

    return bookShelf;
  }

  render() {

    const resultBooks = this.props.resultBooks

    return (
      <div className="search-books-results">
        {resultBooks && (
          <ol className="books-grid">
            {resultBooks.map((bookDetails) => (

              <BookDetails
                key={bookDetails.id}
                book={bookDetails}
                shelf={this.getShelfForBook(bookDetails)}
                shelfOnChange={this.handleOnShalfChange}
              />
            ))}
          </ol>
        )}
      </div>
    )
  }
}

export default SearchBookResults;