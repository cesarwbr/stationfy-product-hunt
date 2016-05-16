/**
 *  Products actions
 *
 * @type {Redux.Action}
 */

import axios from 'axios'

const fetch = axios.create()

// Actions
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const CLEAN_PRODUCTS = 'CLEAN_PRODUCTS'

/**
 * Fetch all products of a type
 * @param {string} type. Product type.
 * @return {function} Function that will return a promise.
 */
export function fetchProducts (type) {
  let apiURL = 'http://localhost:8080/api/products/popular'

  if (type === 'recent') {
    apiURL = 'http://localhost:8080/api/products/recent'
  }

  return dispatch => {
    dispatch(requestProducts())
    return fetch.get(apiURL)
    .then(json => dispatch(receiveProdcuts(json)))
    .catch(err => {
      console.log(err)
    })
  }
}

/**
 * Create a request products action
 * @return {object} action
 */
function requestProducts () {
  return {
    type: REQUEST_PRODUCTS
  }
}

/**
 * Create a receive products action
 * @return {object} action
 */
function receiveProdcuts (json) {
  return {
    type: RECEIVE_PRODUCTS,
    value: json.data.posts
  }
}

/**
 * Create a clean products action
 * @return {object} action
 */
export function cleanProducts () {
  return {
    type: CLEAN_PRODUCTS
  }
}
