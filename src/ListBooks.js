import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import BooksShelf from './BookShelf'

class ListBooks extends Component {

  static propTypes = {
    userBooks: propTypes.array.isRequired,
    shelfOnChange: propTypes.func.isRequired
  }

  render() {

    const { userBooks, shelfOnChange } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksShelf
              booksShelfTitle='Currently Reading'
              books={userBooks.filter((book) => (
                book.shelf === 'currentlyReading'
              ))}
              shelfOnChange={shelfOnChange}
            />
            <BooksShelf
              booksShelfTitle='Want to Read'
              books={userBooks.filter((book) => (
                book.shelf === 'wantToRead'
              ))}
              shelfOnChange={shelfOnChange}
            />
            <BooksShelf
              booksShelfTitle='Read'
              books={userBooks.filter((book) => (
                book.shelf === 'read'
              ))}
              shelfOnChange={shelfOnChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;