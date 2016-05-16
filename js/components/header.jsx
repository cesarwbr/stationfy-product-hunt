/**
 *  Page header component
 *
 * @type {React.Component}
 */

import React from 'react'
import { connector } from '../store/store'

export class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick (event) {
    this.props.setProductListType(event.target.dataset.type)
  }

  render () {
    let popularClass = 'menu--item '
    let recentClass = 'menu--item '

    if (this.props.productListType === 'popular') {
      popularClass += 'menu--item__active'
    } else {
      recentClass += 'menu--item__active'
    }

    return (
      <header className='header'>
        <ul className='menu'>
          <li className={popularClass}>
            <a href='#' data-type='popular' onClick={this.handleMenuClick}>
              Popular
            </a>
          </li>
          <li className={recentClass}>
            <a href='#' data-type='recent' onClick={this.handleMenuClick}>
              Recent
            </a>
          </li>
        </ul>
        <div className='profile'>
          <img className='photo' src='https://ph-avatars.imgix.net/121699/original?auto=format&fit=crop&crop=faces&w=32&h=32' />
          <div className='profile--hover-card'>
            <ul className='profile-menu-list'>
              <li className='profile--menu-item'>
                <span>MY PROFILE</span>
              </li>
              <li className='profile--menu-item'>
                <span>MY COLLECTIONS</span>
              </li>
              <li className='profile--menu-item'>
                <span>SETTINGS</span>
              </li>
              <li className='profile--menu-item'>
                <span>SIGN OUT</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

const { string, func } = React.PropTypes
Header.propTypes = {
  setProductListType: func,
  productListType: string
}

export default connector(Header)
