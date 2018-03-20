export default function pageListReducer (state = [], action) {
  switch (action.type) {
    case 'REQ_PAGES':
      return {
        ...state,
        isFetching: true,
        pages: action.pages
      }
    case 'RES_PAGES':
      return {
        ...state,
        isFetching: false,
        pages: action.pages
      }
    case 'RELOAD_PAGES':
      return {
        ...state,
        isFetching: false,
        pages: ''
      }
    default:
      return state
  }
}
