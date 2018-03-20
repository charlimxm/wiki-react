import React, {PropTypes} from 'react'

const PageDetail = (props) => {
  const { title, fullurl, categories, images } = props

  return (
    <div className='details'>
      <h1>{title}</h1>

      <a href={fullurl} target='_blank'><p>View page on wikipedia</p></a>

      <h2>Images</h2>

      {!images ?
        <div>
          <p>No image found</p>
        </div> :
        <div>
          {images.map((image, i) => (
            <img key={i} src={`http://en.wikipedia.org/wiki/en:Special:Filepath/${image.title.substring(5).split(' ').join('_')}`} height='280' width='280' />
            ))}
        </div>}

      <h2>Categories</h2>

      <ul className='categories'>
        {categories.map((category, i) =>
          <li key={i}>{category.title.substring(9)}</li>
      )}
      </ul>
    </div>
  )
}

PageDetail.PropTypes = {
  title: PropTypes.string.isRequired,
  fullurl: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired
}

export default PageDetail
