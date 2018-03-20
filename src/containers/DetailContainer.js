import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reqPageDetails } from '../actions/index'
import { browserHistory } from 'react-router'
import Detail from '../components/Detail'
import BookmarkButton from '../containers/BookmarkButton'

class DetailContainer extends Component {
  componentWillMount () {
    const {dispatch} = this.props
    dispatch(reqPageDetails(this.props.params.pageID))
  }

  render () {
    const { pageDetails, bookmarks } = this.props
    return (
      <div className='details'>
        {pageDetails ?
          <div>
            <Detail {...pageDetails} />
            <BookmarkButton currPage={pageDetails} bookmarks={bookmarks} />
            <br />
            <button onClick={browserHistory.goBack}>Back to Previous Page</button>
          </div>
          :
            null
        }
      </div>
    )
  }
}

DetailContainer.propTypes = {
  pageDetails: PropTypes.object,
  params: React.PropTypes.shape({
    pageID: React.PropTypes.string
  }),
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => ({
  pageDetails: state.pageDetail.pageDetails,
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(DetailContainer)
