export default function wikiPageDetailsReducer(state = [], action) {
  switch (action.type) {
    case 'REQ_PAGE_DETAILS':
      return {
        ...state,
        isFetching: true,
      }
    case 'RES_PAGE_DETAILS':
      return {
        ...state,
        isFetching: false,
        pageDetails: action.pageDetails,
      }
    default:
      return state
  }
}
