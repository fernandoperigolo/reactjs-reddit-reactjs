const api = "https://www.reddit.com/r/reactjs"

const headers = {
  'Accept': 'application/json',
}

export const fetchPostsSortBy = (filter, afterId = '') => {
  const after = afterId ? `&after=${afterId}` : ''
  return fetch(`${api}/${filter}/.json?limit=3${after}`, { headers })
    .then(res => res.json())
    .then(data => data)
}
