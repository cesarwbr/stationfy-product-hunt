jest.unmock('../js/actions/app-action')
jest.unmock('../js/actions/comments-action')
jest.unmock('../js/actions/products-action')

import * as appActions from '../js/actions/app-action'
import * as commentsActions from '../js/actions/comments-action'
import * as productsActions from '../js/actions/products-action'

describe('app actions', () => {
  it('should create an action to set product type', () => {
    const type = 'popular'

    const expectedAction = {
      type: appActions.SET_PRODUCT_LIST_TYPE,
      value: type
    }

    expect(appActions.setProductListType(type)).toEqual(expectedAction)
  })

  it('should create an action to set a product', () => {
    const product = {}

    const expectedAction = {
      type: appActions.SET_PRODUCT,
      value: product
    }

    expect(appActions.setProduct(product)).toEqual(expectedAction)
  })

  it('should create an action to enable the modal', () => {
    const modal = true

    const expectedAction = {
      type: appActions.SET_MODAL,
      value: modal
    }

    expect(appActions.setModal(modal)).toEqual(expectedAction)
  })

  it('should create an action to set a list of product', () => {
    const products = []

    const expectedAction = {
      type: appActions.SET_PRODUCTS,
      value: products
    }

    expect(appActions.setProducts(products)).toEqual(expectedAction)
  })
})

describe('comments action', () => {
  it('should create an action to clean the comments', () => {
    const expectedAction = {
      type: commentsActions.CLEAN_COMMENTS
    }

    expect(commentsActions.cleanComments()).toEqual(expectedAction)
  })
})

describe('products action', () => {
  it('should create an action to clean the products', () => {
    const expectedAction = {
      type: productsActions.CLEAN_PRODUCTS
    }

    expect(productsActions.cleanProducts()).toEqual(expectedAction)
  })
})
