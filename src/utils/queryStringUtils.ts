const USER_PARAM_KEY = "user"

// Store and retrieve the user id from query string.
export const saveQueryStringUser = (newUserId: string) => {
  insertParamIntoURL(USER_PARAM_KEY, newUserId)
}
export const getQueryStringUser = () => {
  var notebotUserParams = new URLSearchParams(window.location.search)
  return notebotUserParams.get(USER_PARAM_KEY) || null
}

const insertParamIntoURL = (key: string, value: string) => {
  key = encodeURIComponent(key)
  value = encodeURIComponent(value)

  let kvp = window.location.search.substr(1).split("&")
  if (kvp[0] === "") {
    const path =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      key +
      "=" +
      value
    window.history.pushState({ path: path }, "", path)
  } else {
    let i = kvp.length
    let x
    while (i--) {
      x = kvp[i].split("=")

      if (x[0] === key) {
        x[1] = value
        kvp[i] = x.join("=")
        break
      }
    }

    if (i < 0) {
      kvp[kvp.length] = [key, value].join("=")
    }

    const refresh =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      kvp.join("&")
    window.history.pushState({ path: refresh }, "", refresh)
  }
}