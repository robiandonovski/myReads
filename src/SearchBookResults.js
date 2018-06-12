import React, { Component } from 'react'
import propTypes from 'prop-types'
import BookDetails from './BookDetails';

class SearchBookResults extends Component {

  static propTypes = {
    books: propTypes.array.isRequired,
    shelfOnChange: propTypes.func.isRequired
  }

  handleOnShalfChange = (book, shelf) => {
    this.props.shelfOnChange(book, shelf)
  }

  render() {

    const books = this.props.books;

    return (
      <div className="search-books-results">
        {books && (
          <ol className="books-grid">
            {books.map((bookDetails) => (
              <BookDetails
                key={bookDetails.id}
                book={bookDetails}
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