const URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&grnnamespace=0&origin=*'

export const fetchRandomPages = () => {
  return new Promise((resolve) => {
    const storedData = localStorage.getItem('pages')

    if (!storedData) {
      return fetch(`${URL}&generator=random&grnlimit=10`)
      .then(req => req.json())
      .then(json => Object.values(json.query.pages))
      .then(pages => {
        const storing = JSON.stringify(pages)
        localStorage.setItem('pages', storing)
        return resolve(pages)
      })
      .catch(function (e) {
        console.error(e)
        throw new Error('Wikipedia API Failure')
      })
    }

    const pages = JSON.parse(storedData)
    return resolve(pages)
  })
}

export const getInfoByPageID = (pageID) => {
  return new Promise((resolve) => {
    const detailsSerialized = localStorage.getItem('pageDetails')
    let detailsContainer = JSON.parse(detailsSerialized)

    if (!detailsContainer[pageID]) {
      return fetch(`${URL}&prop=info|images|categories&inprop=url&pageids=${pageID}`)
      .then(req => req.json())
      .then(json => Object.values(json.query.pages)[0])
      .then(details => {
        detailsContainer[pageID] = details
        const serialize = JSON.stringify(detailsContainer)
        localStorage.setItem('pageDetails', serialize)
        return resolve(detailsContainer)
      })
      .catch(function (e) {
        console.error(e)
        throw new Error('Wikipedia API Failure')
      })
    }
    detailsContainer = JSON.parse(detailsSerialized)
    return resolve(detailsContainer)
  })
}
