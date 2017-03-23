/**
* by isam  2016-11-8 16:48:07
*/

export function getCookie ( name ){
    let  cookieName  = encodeURIComponent( name ) + "="
    let  cookieStart = document.cookie.indexOf( cookieName )
    let  cookieValue = null 

    if( cookieStart > -1 ){
        var cookieEnd = document.cookie.indexOf(";",cookieStart)

        if( cookieEnd == -1 ){
            cookieEnd = document.cookie.length;
        }

        cookieValue = decodeURIComponent( document.cookie.substring( cookieStart +  cookieName.length, cookieEnd) )
    }

    return cookieValue

}

/**
 * Merge an array of objects into one.
 *
 * @param {Array<Object>} arr
 * @return {Object}
 */

export function mergeObjects (arr) {
  return arr.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const existing = prev[key]
      if (existing) {
        // allow multiple mutation objects to contain duplicate
        // handlers for the same mutation type
        if (Array.isArray(existing)) {
          prev[key] = existing.concat(obj[key])
        } else {
          prev[key] = [existing].concat(obj[key])
        }
      } else {
        prev[key] = obj[key]
      }
    })
    return prev
  }, {})
}

/**
 * Check whether the given value is Object or not
 *
 * @param {*} obj
 * @return {Boolean}
 */

export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get state sub tree by given keys.
 *
 * @param {Object} state
 * @param {Array<String>} nestedKeys
 * @return {Object}
 */
export function getNestedState (state, nestedKeys) {
  return nestedKeys.reduce((state, key) => state[key], state)
}

/**
 * Hacks to get access to Vue internals.
 * Maybe we should expose these...
 */

let Watcher
export function getWatcher (vm) {
  if (!Watcher) {
    const noop = function () {}
    const unwatch = vm.$watch(noop, noop)
    Watcher = vm._watchers[0].constructor
    unwatch()
  }
  return Watcher
}

let Dep
export function getDep (vm) {
  if (!Dep) {
    Dep = vm._data.__ob__.dep.constructor
  }
  return Dep
}

