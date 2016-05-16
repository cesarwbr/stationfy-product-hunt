/**
 *  Application store
 *
 * @type {Redux.Store}
 */

import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { setProductListType, setProduct, setModal, setProducts } from '../actions/app-action'
import { fetchProducts, cleanProducts } from '../actions/products-action'
import { fetchComments, cleanComments } from '../actions/comments-action'

export const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.dispatch(fetchProducts('popular'))

const mapStateToProps = (state) => ({
  productListType: state.appReducer.productListType,
  product: state.appReducer.product,
  modal: state.appReducer.modal,
  products: state.productsReducer.products,
  comments: state.commentsReducer.comments,
  productsLoading: state.productsReducer.productsLoading,
  commentsLoading: state.commentsReducer.commentsLoading
})

const mapDispatchToProps = (dispatch) => {
  return {
    setProductListType: (type) => {
      dispatch(setProductListType(type))
      dispatch(cleanProducts())
      dispatch(fetchProducts(type))
    },
    setProduct: (product) => {
      dispatch(setProduct(product))
      dispatch(cleanComments())
      dispatch(fetchComments(product.id))
    },
    setModal: (modal) => {
      dispatch(setModal(modal))
    },
    setProducts: (products) => {
      dispatch(setProducts(products))
    }
  }
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
