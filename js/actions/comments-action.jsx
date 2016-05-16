/**
 *  Comments actions
 *
 * @type {Redux.Action}
 */

import axios from 'axios'

const fetch = axios.create()

// Actions
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const CLEAN_COMMENTS = 'CLEAN_COMMENTS'

/**
 * Fetch all comments of a product
 * @param {number} id. Product id.
 * @return {function} Function that will return a promise.
 */
export function fetchComments (id) {
  const apiURL = `http://localhost:8080/api/comments/${id}`

  return dispatch => {
    dispatch(requestComments())
    return fetch.get(apiURL)
    .then(json => dispatch(receiveComments(json)))
    .catch(err => {
      console.log(err)
    })
  }
}

/**
 * Create a request comments action
 * @return {object} action
 */
function requestComments () {
  return {
    type: REQUEST_COMMENTS
  }
}

/**
 * Create a receive comments action
 * @return {object} action
 */
function receiveComments (json) {
  return {
    type: RECEIVE_COMMENTS,
    value: json.data.comments
  }
}

/**
 * Create a clean comments action
 * @return {object} action
 */
export function cleanComments () {
  return {
    type: CLEAN_COMMENTS
  }
}
