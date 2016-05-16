/**
 *  Component that show a discussion according to an array of comments
 *
 * @type {React.Component}
 */

import React from 'react'
import Loading from './loading'

class Discussion extends React.Component {
  render () {
    return (
      <div className='discussion'>
        <h2>Discussion</h2>
        <Loading loading={this.props.loading} />
        <ol className='discussion--list'>
          {this.props.comments
            .map((comment) => (
              <li key={comment.id} className='discussion--item'>
                <h2>{comment.user.name}</h2>
                <img className='discussion--item--photo' src={comment.user.image_url['32px']} />
                <div className='comment-body'>
                  <p>{comment.body}</p>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

const { array, bool } = React.PropTypes
Discussion.propTypes = {
  comments: array,
  loading: bool
}

export default Discussion
