import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bookmarks from '../components/Bookmarks'
import { removeBookmark } from '../actions/actions'

class BookmarkContainer extends Component {
  render () {
    return (
      <div className='container'>
        <Bookmarks {...this.props} removeBookmark={removeBookmark} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(BookmarkContainer)
