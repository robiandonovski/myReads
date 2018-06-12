import React, { Component } from 'react'
import propTypes from 'prop-types'
import SearchBookBar from './SearchBookBar'
import SearchBookResults from './SearchBookResults';

class SearchBook extends Component {

  static propTypes = {
    books: propTypes.array.isRequired,
    resetSearchBooks: propTypes.func.isRequired,
    searchBook: propTypes.func.isRequired,
    shelfOnChange: propTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.resetSearchBooks()
  }

  render() {

    const { books, searchBook, shelfOnChange } = this.props

    return (
      <div className="search-books">
        <SearchBookBar
          onSearchChange={searchBook}
        />
        <SearchBookResults
          books={books}
          shelfOnChange={shelfOnChange}
        />
      </div>
    )
  }
}

export default SearchBook;