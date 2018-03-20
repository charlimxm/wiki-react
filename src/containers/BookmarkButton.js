import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBookmark, removeBookmark } from '../actions/actions'

class BookmarkButton extends Component {
  render () {
    const { dispatch, bookmarks, currPage } = this.props
    const isBookmarked = bookmarks.find(bookmark => bookmark.pageid === currPage.pageid)

    return (
    (!isBookmarked) ?
      <div className='button'>
        <button onClick={() => { dispatch(addBookmark(currPage)) }}>
             Add Bookmark 😍
          </button>
      </div> :
      <div className='button'>
        <button onClick={() => { dispatch(removeBookmark(currPage)) }}>
             Remove Bookmark 👋
          </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pageID: state.pageID
})

export default connect(mapStateToProps)(BookmarkButton)
