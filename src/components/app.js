import React, { Component } from 'react'
import './styles/app.css'
import Page from './page'
import Bookmark from './bookmark'
import icon from './styles/icon.png'

const grey = '#CDCDCD'
const blue = '#0BB5FF'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pageColor: blue,
      bookmarkColor: grey,
      showPage: true,
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
      <div className='mainContainer'>
        <div className='logo'>
          <img src={icon} alt='Logo' height='60' />
          <h1>Mini Wikipedia</h1>
        </div>

        <div className='container1'>
          <div
            id='page'
            style={{borderColor: this.state.pageColor, color: this.state.pageColor}}
            onClick={this.viewPageList}
          >
            Pages
          </div>

          <div
            id='bookmark'
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
