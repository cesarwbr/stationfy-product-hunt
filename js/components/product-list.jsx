/**
 *  Component that list all products fetched
 *
 * @type {React.Component}
 */

import React from 'react'
import Header from './header'
import ProductCard from './product-card'
import Loading from './loading'
import Modal from './modal'
import { connector } from '../store/store'

class ProductList extends React.Component {
  constructor (props) {
    super(props)

    this.handleProductClick = this.handleProductClick.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleProductClick (id) {
    const products = this.props.products
    let product

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        product = products[i]
        break
      }
    }

    this.props.setProduct(product)
    this.props.setModal(true)
  }

  handleCloseModal () {
    this.props.setModal(false)
  }

  render () {
    return (
      <div>
        <Header />
        <Loading loading={this.props.productsLoading} />
        <ul className='products'>
          {this.props.products
            .map((product) => (
              <ProductCard
                {...product}
                key={product.id}
                handleProductClick={this.handleProductClick}
              />
            ))}
        </ul>
        <Modal
          isOpen={this.props.modal}
          {...this.props.product}
          comments={this.props.comments}
          handleCloseModal={this.handleCloseModal}
          loading={this.props.commentsLoading}
        />
      </div>
    )
  }
}

const { func, object, bool, array } = React.PropTypes
ProductList.propTypes = {
  setProduct: func,
  setModal: func,
  product: object,
  products: array,
  modal: bool,
  comments: array,
  productsLoading: bool,
  commentsLoading: bool
}

export default connector(ProductList)
