const express = require('express')

// const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('partials/index')
})

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(results => {
//       res.render('/partials/index', results)
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('/partials/')
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('/partials/index')
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('/partials/index')
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router