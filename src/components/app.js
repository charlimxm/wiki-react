import React, { Component } from 'react'
import './styles/app.css'
import Page from './page'
import Bookmark from './bookmark'

const grey = '#CDCDCD'
const blue = '#0BB5FF'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pageColor: grey,
      bookmarkColor: grey,
      showPage: false,
      showBookmark: false
    }
    this.viewPageList = this.viewPageList.bind(this)
    this.viewBookmarkList = this.viewBookmarkList.bind(this)
  }

  viewPageList () {
    const newColor = this.state.pageColor === grey ? blue : grey
    this.setState({
      pageColor: newColor,
      bookmarkColor: grey,
      showPage: true,
      showBookmark: false
    })
  }

  viewBookmarkList () {
    const newColor = this.state.bookmarkColor === grey ? blue : grey
    this.setState({
      bookmarkColor: newColor,
      pageColor: grey,
      showBookmark: true,
      showPage: false
    })
  }

  render () {
    return (
      <div>
        <p>Mini Wikipedia</p>

        <div className='container1'>

          <div
            className='page'
            style={{borderColor: this.state.pageColor, color: this.state.pageColor}}
            onClick={this.viewPageList}
          >
            Pages
          </div>

          <div
            className='bookmark'
            style={{borderColor: this.state.bookmarkColor, color: this.state.bookmarkColor}}
            onClick={this.viewBookmarkList}
          >
            Bookmarks
          </div>

        </div>

        <br />

        {this.state.showPage && <Page />}
        {this.state.showBookmark && <Bookmark />}

      </div>
    )
  }
}

export default App
