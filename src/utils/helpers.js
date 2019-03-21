export function formatDate (timestamp) {
  const d = new Date(timestamp*1000)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function timeAgo(timestamp) {
  const seconds = Math.floor((new Date() - timestamp*1000) / 1000)
  let interval = Math.floor(seconds / 31536000)
  if (interval > 1) {
    return interval + " years"
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + " months"
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + " days"
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + " hours"
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + " minutes"
  }
  return Math.floor(seconds) + " seconds"
}

export function normalizeObjectBy(attr, attr2, object){
  return object.reduce((novoObjeto, item) => {
    novoObjeto[item[attr][attr2]] = item;
    return novoObjeto;
  }, {})
}
