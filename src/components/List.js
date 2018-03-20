import React from 'react'
import { Link } from 'react-router'

const List = (props) => {
  const { items } = props

  return (
    (!items) ? null :
    <ol className='rounded-list'>
      {items.map(item =>
        <li><Link to={`/page/${item.pageid}`} key={item.pageid}>{item.title}</Link></li>
      )}
    </ol>
  )
}

export default List
