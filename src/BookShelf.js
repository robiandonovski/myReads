import React, { Component } from 'react';
import propTypes from 'prop-types';
import BookDetails from './BookDetails';

class BooksShelf extends Component {

  static propTypes = {
    booksShelfTitle: propTypes.string.isRequired,
    books: propTypes.array.isRequired,
    shelfOnChange: propTypes.func.isRequired
  }

  render() {

    const { booksShelfTitle, books, shelfOnChange } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{booksShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((bookDetails) => (
              <BookDetails
                key={bookDetails.id}
                book={bookDetails}
                shelfOnChange={shelfOnChange}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksShelf;