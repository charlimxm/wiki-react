import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Detail from './containers/DetailContainer'
import Bookmark from './containers/BookmarkContainer'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/page/:pageID' component={Detail} />
    <Route path='/bookmarks' component={Bookmark} />
  </Route>
)
