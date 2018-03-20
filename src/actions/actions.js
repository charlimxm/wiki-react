import { fetchRandomPages, getInfoByPageID } from '../WikiAPI'

export function reqPages () {
  return (dispatch) => {
    const action = {
      type: 'REQ_PAGES'
    }

    dispatch(action)
    fetchRandomPages()
      .then((data) => dispatch(resPages(data)))
  }
}

export function resPages (pages) {
  return {
    type: 'RES_PAGES',
    pages: pages
  }
}

export function reloadPages () {
  return (dispatch) => {
    const action = {
      type: 'RELOAD_PAGES'
    }

    dispatch(action)
    localStorage.setItem('pages', '')
    dispatch(reqPages())
  }
}

export function reqPageDetails (pageID) {
  return (dispatch) => {
    const action = {
      type: 'REQ_PAGE_DETAILS',
      pageID: pageID
    }

    dispatch(action)
    getInfoByPageID(pageID)
      .then(pageList => { dispatch(resPageDetails(pageList[pageID])) })
  }
}

export function resPageDetails (details) {
  return (dispatch) => {
    const action = {
      type: 'RES_PAGE_DETAILS',
      pageDetails: details
    }

    dispatch(action)
  }
}

export function addBookmark (newPage) {
  return (dispatch) => {
    const action = {
      type: 'ADD_BOOKMARK',
      newBookmark: newPage
    }

    dispatch(action)
  }
}

export function removeBookmark (page) {
  return (dispatch) => {
    const action = {
      type: 'REMOVE_BOOKMARK',
      page
    }

    dispatch(action)
  }
}
