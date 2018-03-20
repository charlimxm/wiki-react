import React from 'react'
import { Link } from 'react-router'

const Bookmarks = (props) => {
  const { bookmarks, removeBookmark, dispatch } = props

  return (
    <div className='bookmark'>
      {(!bookmarks || !bookmarks.length) ? <p>No Bookmarks Yet!</p> :
      <ol className='rounded-list'>
        {bookmarks.map(bookmark =>
          <li>
            <Link to={`/page/${bookmark.pageid}`} key={bookmark.pageid}>{bookmark.title}</Link> <button onClick={() => {
              dispatch(removeBookmark(bookmark))
            }}>Delete X </button>
          </li>
          )}
      </ol>}
    </div>
  )
}

export default Bookmarks
