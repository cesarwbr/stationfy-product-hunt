jest.unmock('../js/components/modal')
jest.unmock('../js/components/loading')
jest.unmock('../js/components/discussion')
jest.unmock('../js/components/product-card')
jest.unmock('../js/components/header')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Modal from '../js/components/modal'
import Loading from '../js/components/loading'
import Discussion from '../js/components/discussion'
import ProductCard from '../js/components/product-card'

describe('Component Load', () => {
  it('should display Modal component', () => {
    const user = {
      name: 'Foo',
      image_url: {
        '48px': 'http://test.com'
      }
    }

    const thumbnail = {
      image_url: 'http://test.com'
    }

    const element = TestUtils.renderIntoDocument(
      <Modal
        isOpen
        name='Foo'
        user={user}
        topics={[]}
        votes_count={120}
        thumbnail={thumbnail}
        comments={[]} />
    )

    const elementNode = ReactDOM.findDOMNode(element)
    expect(elementNode.className).toBe('modal modal-overlay modal__open')
  })

  it('should hide Loading component', () => {
    const element = TestUtils.renderIntoDocument(
      <Loading />
    )

    const elementNode = ReactDOM.findDOMNode(element)
    expect(elementNode.className).toBe('loading')
  })

  it('should show Loading component', () => {
    const element = TestUtils.renderIntoDocument(
      <Loading loading />
    )

    const elementNode = ReactDOM.findDOMNode(element)
    expect(elementNode.className).toBe('loading show')
  })

  it('should load Discussion without items', () => {
    const component = TestUtils.renderIntoDocument(
      <Discussion comments={[]} />
    )

    const elementNode = ReactDOM.findDOMNode(component)
    elementNode.quer

    expect(elementNode.querySelectorAll('ol li').length).toBe(0)
  })

  it('should load Discussion with all items', () => {
    const comments = [{
      id: 1,
      user: {
        name: 'Foo',
        image_url: {
          '32px': 'http://test.com'
        }
      },
      body: 'testing...'
    }, {
      id: 2,
      user: {
        name: 'Bar',
        image_url: {
          '32px': 'http://test.com'
        }
      },
      body: 'testing...'
    }, {
      id: 3,
      user: {
        name: 'Foo Bar',
        image_url: {
          '32px': 'http://test.com'
        }
      },
      body: 'testing...'
    }]

    const component = TestUtils.renderIntoDocument(
      <Discussion comments={comments} />
    )

    const elementNode = ReactDOM.findDOMNode(component)
    elementNode.quer

    expect(elementNode.querySelectorAll('ol li').length).toBe(3)
  })

  it('should load ProductCard component', () => {
    const props = {
      thumbnail: {
        image_url: 'http://test.com'
      },
      name: 'Foo',
      tagline: 'Bar'
    }

    const component = TestUtils.renderIntoDocument(
      <ProductCard {...props} />
    )

    const elementNode = ReactDOM.findDOMNode(component)
    expect(elementNode.className).toBe('product-card')
  })
})
