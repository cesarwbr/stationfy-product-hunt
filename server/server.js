/**
 * Server module to listen connections and provide a REST API
 */

var express = require('express')
var axios = require('axios')
var path = require('path')

// Product Hunt API token
var fetch = axios.create({
  headers: {
    'Authorization': 'Bearer d5c3418d95c3363da0c7e1ae42e7d921e1fadcb5cfccc2f3395a9d80a4f0b117',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Host': 'api.producthunt.com'
  }
})

express()
    // provide web client files
    .use(express.static('./public'))
    /** @api {get} /api/products/popular Request Product Hunt popular products */
    .get('/api/products/popular', function (req, res) {
      fetch.get('https://api.producthunt.com/v1/posts')
        .then(function (json) {
          res.json(json.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    })
    /** @api {get} /api/products/recent Request Product Hunt recent products */
    .get('/api/products/recent', function (req, res) {
      fetch.get('https://api.producthunt.com/v1/posts/all?search[category]=tech')
        .then(function (json) {
          res.json(json.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    })
    /** @api {get} /api/comments/:id Request Product Hunt a product comments */
    .get('/api/comments/:id', function (req, res) {
      const id = req.params.id

      fetch.get('https://api.producthunt.com/v1/comments?search[post_id]=' + id)
        .then(function (json) {
          res.json(json.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    })
    // define intial page
    .get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'))
    })
    // listen on port 8080
    .listen(8080, () => {
      console.log('Load http://localhost:8080/.')
    })
