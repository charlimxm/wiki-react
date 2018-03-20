export default function BookmarksReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return [
        ...state,
        action.newBookmark
      ]
    case 'REMOVE_BOOKMARK':
      return state.filter(page => page.pageid !== action.page.pageid)
    default:
      return state
  }
}
