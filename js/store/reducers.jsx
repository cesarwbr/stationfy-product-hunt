/**
 *  Application reducer to server our store
 *
 * @type {Redux.Reducer}
 */

import { combineReducers } from 'redux'

import { REQUEST_COMMENTS, RECEIVE_COMMENTS, CLEAN_COMMENTS } from '../actions/comments-action'
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, CLEAN_PRODUCTS } from '../actions/products-action'
import { SET_PRODUCT_LIST_TYPE,
  SET_PRODUCT, SET_MODAL, SET_PRODUCTS
} from '../actions/app-action'

const appInitialState = {
  productListType: 'popular',
  product: {},
  modal: false
}

const appReducer = (state = appInitialState, action) => {
  const newState = {}

  switch (action.type) {
    case SET_PRODUCT_LIST_TYPE:
      Object.assign(newState, state, {
        productListType: action.value,
        products: []
      })
      return newState
    case SET_PRODUCT:
      Object.assign(newState, state, {
        product: action.value,
        comments: []
      })
      return newState
    case SET_MODAL:
      Object.assign(newState, state, {modal: action.value})
      return newState
    case SET_PRODUCTS:
      Object.assign(newState, state, {products: action.products})
      return newState
    default:
      return state
  }
}

const commentsInitialState = {
  comments: [],
  commentsLoading: false
}

const commentsReducer = (state = commentsInitialState, action) => {
  const newState = {}

  switch (action.type) {
    case CLEAN_COMMENTS:
      Object.assign(newState, state, {comments: []})
      return newState
    case REQUEST_COMMENTS:
      Object.assign(newState, state, {commentsLoading: true})
      return newState
    case RECEIVE_COMMENTS:
      Object.assign(newState, state, {commentsLoading: false, comments: action.value})
      return newState
    default:
      return state
  }
}

const productsInitialState = {
  products: [],
  productsLoading: false
}

const productsReducer = (state = productsInitialState, action) => {
  const newState = {}

  switch (action.type) {
    case CLEAN_PRODUCTS:
      Object.assign(newState, state, {products: []})
      return newState
    case REQUEST_PRODUCTS:
      Object.assign(newState, state, {productsLoading: true})
      return newState
    case RECEIVE_PRODUCTS:
      Object.assign(newState, state, {productsLoading: false, products: action.value})
      return newState
    default:
      return state
  }
}

const rootReducer = combineReducers({
  appReducer,
  commentsReducer,
  productsReducer
})

export default rootReducer
