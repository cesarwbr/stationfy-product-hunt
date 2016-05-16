/**
 *  Loading component
 *
 * @type {React.Component}
 */

import React from 'react'

class Loading extends React.Component {
  render () {
    let loadingClass = 'loading'

    if (this.props.loading) {
      loadingClass += ' show'
    }

    return (
      <div className={loadingClass}>
        <img src='img/jar-loading.gif' />
      </div>
    )
  }
}

const { bool } = React.PropTypes

Loading.propTypes = {
  loading: bool
}

export default Loading
