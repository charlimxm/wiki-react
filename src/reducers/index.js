import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import pageList from './pageList'
import pageDetail from './pageDetail'
import bookmarks from './bookmarks'

export default combineReducers({
  routing: routerReducer,
  pageList,
  pageDetail,
  bookmarks
})
