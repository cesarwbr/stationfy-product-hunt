/**
 *  General actions for all the app
 *
 * @type {Redux.Action}
 */

// Actions
export const SET_PRODUCT_LIST_TYPE = 'SET_PRODUCT_LIST_TYPE'
export const SET_PRODUCT = 'SET_PRODUCT'
export const SET_MODAL = 'SET_MODAL'
export const SET_PRODUCTS = 'SET_PRODUCTS'

/**
 * Set the product list type for the application
 * @param {string} type. Which type of products. 'popular' | 'recent'
 */
export function setProductListType (value) {
  return {
    type: SET_PRODUCT_LIST_TYPE,
    value: value
  }
}

/**
 * Set the product that will be showed in modal
 * @param {object} value
 */
export function setProduct (value) {
  return {
    type: SET_PRODUCT,
    value: value
  }
}

/**
 * Set if the modal is showed
 * @param {bool} value.
 */
export function setModal (value) {
  return {
    type: SET_MODAL,
    value: value
  }
}

/**
 * Set a list of products to be render.
 * @param {array} value.
 */
export function setProducts (value) {
  return {
    type: SET_PRODUCTS,
    value: value
  }
}
