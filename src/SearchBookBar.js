import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class SearchBookBar extends Component {

  static propTypes = {
    onSearchChange: propTypes.func.isRequired
  }

  handleSearchOnChange = (event) => {
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.handleSearchOnChange} />
        </div>
      </div>
    )
  }
}

export default SearchBookBar;