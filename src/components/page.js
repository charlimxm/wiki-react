import React, { Component } from 'react'

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
        let pageTitles = []
        for (var i = 0; i < 10; i++) {
          pageTitles.push(<li id={(Object.values(data.query.pages))[i].pageid}><strong>{(Object.values(data.query.pages))[i].title}</strong></li>)
        }
        this.setState({
          pages: pageTitles
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
      <div className='randomPagesContainer'>
        {this.state.pages}
      </div>
    )
  }
}

export default Page
