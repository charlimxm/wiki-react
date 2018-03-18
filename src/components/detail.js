import React, { Component } from 'react'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      url: '',
      images: [],
      categories: [],
      requestFailed: false
    }
  }

  componentDidMount () {
    const pageId = (this.props.location.pathname).substring(1)
    this.getData(pageId)
  }

  componentWillReceiveProps (nextProps) {
    const pageId = (nextProps.location.pathname).substring(1)
    this.getData(pageId)
  }

  getData (pageId) {
    fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&pageids=${pageId}&grnnamespace=0&prop=info|images|categories&inprop=url&iiprop=url&origin=*`)
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
          title: Object.values(data.query.pages)[0].title,
          url: Object.values(data.query.pages)[0].fullurl,
          images: Object.values(data.query.pages)[0].images,
          categories: Object.values(data.query.pages)[0].categories
        })
        console.log(this.state.images)
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render () {
    return (
      <div className="details">
        <h1>{this.state.title}</h1>

        <p><a href={this.state.url} target='_blank'>Visit Page</a></p>

        <h2>Images</h2>

        {!this.state.images ?
          <div>
            <p>No image found</p>
          </div> :
          <div>
            {this.state.images.map((image, i) => (
              <img key={i} src={`http://en.wikipedia.org/wiki/en:Special:Filepath/${image.title.substring(5).split(' ').join('_')}`} height='280' width='280' />
            ))}
          </div>
        }

        <h2>Categories</h2>
        <ul className='categories'>
          {this.state.categories.map((category, i) => (
            <li key={i}>{category.title.substring(9)}</li>
            ))}
        </ul>

        <button type='submit' value='Submit'> Bookmark 😍 </button>

      </div>
    )
  }
}

export default Detail
