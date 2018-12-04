import Cookies from 'js-cookie'

const TokenKey = 'TT_TOKEN'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token,{expires ,})
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}