import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    searchBooks: [],
    userBooks: []
  }

  getUserBooks = () => {
    BooksAPI.getAll()
      .then((result) => {
        this.setState({
          userBooks: result
        })
      })
  }

  componentDidMount() {
    this.getUserBooks();
  }

  resetSearchBooks = () => {
    this.setState({
      searchBooks: []
    });
  }

  searchBook = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then((result) => {
          this.setState({
            searchBooks: result
          });
        })
    }
  }

  bookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((result) => {
        this.getUserBooks();
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            userBooks={this.state.userBooks}
            shelfOnChange={this.bookUpdate}
          />
        )} />

        <Route path='/search' render={() => (
          <SearchBook
            books={this.state.searchBooks}
            resetSearchBooks={this.resetSearchBooks}
            searchBook={this.searchBook}
            shelfOnChange={this.bookUpdate}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
