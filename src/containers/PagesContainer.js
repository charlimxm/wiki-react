import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reqPages, reloadPages } from '../actions/actions'
import List from '../components/List'

class PagesContainer extends Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(reqPages())
  }

  render () {
    const { pageList, dispatch } = this.props
    const { pages } = pageList

    return (
      <div className='page'>
        {(!pages) ? '' : <List items={pages} />}
        <button onClick={() => dispatch(reloadPages())} >
          Get Random Pages ⟳
        </button>
      </div>
    )
  }
}

PagesContainer.PropTypes = {
  pageList: React.PropTypes.shape({
    pages: React.PropTypes.array.isRequired
  }),
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  pageList: state.pageList
})

export default connect(mapStateToProps)(PagesContainer)
