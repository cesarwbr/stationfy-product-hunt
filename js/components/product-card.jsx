/**
 *  Component that show a product card to the list
 *
 * @type {React.Component}
 */

import React from 'react'

class ProductCard extends React.Component {
  constructor (props) {
    super(props)

    this.handleProductClickEvent = this.handleProductClickEvent.bind(this)
  }

  handleProductClickEvent () {
    this.props.handleProductClick(this.props.id)
  }

  render () {
    return (
      <li className='product-card' onClick={this.handleProductClickEvent}>
        <div className='product-card--content'>
          <img src={this.props.thumbnail.image_url} className='product-card-img' />
          <div className='product-card-text'>
            <h3 className='product-card-title'>{this.props.name}</h3>
            <p className='product-card-description'>{this.props.tagline}</p>
          </div>
        </div>
      </li>
    )
  }
}

const { string, func, number, object } = React.PropTypes
ProductCard.propTypes = {
  name: string.isRequired,
  tagline: string.isRequired,
  thumbnail: object.isRequired,
  handleProductClick: func,
  id: number
}

export default ProductCard
