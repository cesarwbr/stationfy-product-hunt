/**
 *  Modal container
 *
 * @type {React.Component}
 */

import React from 'react'
import Discussion from './discussion'

class Modal extends React.Component {
  constructor (props) {
    super(props)

    this.handleCloseModalEvent = this.handleCloseModalEvent.bind(this)
    this.blockClicks = this.blockClicks.bind(this)
  }

  handleCloseModalEvent () {
    this.props.handleCloseModal()
  }

  blockClicks (event) {
    event.stopPropagation()
  }

  render () {
    let modalClass = 'modal modal-overlay'

    if (this.props.isOpen) {
      modalClass += ' modal__open'
    }

    if (!this.props.isOpen) {
      return (<div></div>)
    }

    return (
      <div className={modalClass} onClick={this.handleCloseModalEvent}>
        <a href='#' onClick={this.handleCloseModalEvent} className='modal-overlay__close'></a>
        <div className='modal-overlay--content' onClick={this.blockClicks}>
          <div className='modal-overlay--content--header'>
            <h1>{this.props.name}</h1>
            <h2>by {this.props.user.name}</h2>
            <img className='photo' src={this.props.user.image_url['48px']} />
          </div>
          <div className='modal-overlay--content--body'>
            <div className='modal-overlay--meta'>
              <ul>
                <li className='modal-overlay--meta--item'>
                  <span>
                    <img src='https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-like-6a1e9e9db48b9b788639f05a658379b7bb027a75d256127f812bf9392664396f.png' />
                    <span className='modal-overlay--meta--likes'>{this.props.votes_count} likes</span>
                  </span>
                </li>
                <li className='modal-overlay--meta--item'>
                  <span>
                    <h3>Topics</h3>
                    <ol className='modal-overlay--meta--topics'>
                      {this.props.topics
                        .map((topic) => (
                          <li key={topic.id} className='modal-overlay--meta--topic'><span>{topic.name}</span></li>
                        ))
                      }
                    </ol>
                  </span>
                </li>
              </ul>
            </div>
            <div className='modal-overlay--content--body--image'>
              <img src={this.props.thumbnail.image_url} />
            </div>
            <div className='modal-overlay--content--body--description'>
              {this.props.tagline}
            </div>
          </div>
          <Discussion loading={this.props.loading} comments={this.props.comments} />
        </div>
      </div>
    )
  }
}

const { bool, func, string, object, number, array } = React.PropTypes
Modal.propTypes = {
  isOpen: bool,
  handleCloseModal: func,
  name: string,
  thumbnail: object,
  tagline: string,
  user: object,
  votes_count: number,
  topics: array,
  comments: array,
  loading: bool
}

export default Modal
