import React, { Component } from 'react'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Detail from './detail'

class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pages: [],
      requestFailed: false
    }
  }

  componentDidMount () {
    console.log('Before fetch')
    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&grnlimit=10&origin=*')
      .then(console.log('Fetch successful'))
      .then(response => {
        if (!response.ok) {
          throw Error('Error fetching API!')
        }
        return response
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          pages: Object.values(data.query.pages)
        })
        console.log(this.state.pages)
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render () {
    return (
      <div className='page'>
        <BrowserRouter>
          <div className='pagesContainer'>
            <ol className="rounded-list">
              {this.state.pages.map(({ pageid, title }) => (
                <li key={pageid}>
                  <Link exact to={`/${pageid}`}>{title}</Link>
                </li>
              ))}
            </ol>

            <div className="details">
              <Route exact path={`/:pageId`} component={Detail} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Page
