/**
 *  The main App componet
 *
 * @type {React.Component}
 */

import React from 'react'
import { render } from 'react-dom'
import ProductList from './components/product-list'
import { store } from './store/store'
import { Provider } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ProductList />
      </Provider>
    )
  }
}

render(<App />, document.getElementById('app'))
