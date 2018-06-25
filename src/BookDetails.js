import React, { Component } from 'react'
import propTypes from 'prop-types'

class BookDetails extends Component {

  static propTypes = {
    shelf: propTypes.string.isRequired,
    book: propTypes.object.isRequired,
    shelfOnChange: propTypes.func.isRequired
  }

  handleShelfOnChange = (event) => {
    this.props.shelfOnChange(this.props.book, event.target.value)
  }

  render() {

    const shelf = this.props.shelf
    const { title, authors, imageLinks } = this.props.book

    return (
      <li>
        <div className="book">
          <div className="book-top">
            {imageLinks &&
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>
            }
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleShelfOnChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors && authors.map((author) => (
            <div key={author} className="book-authors">{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default BookDetails;