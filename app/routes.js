const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == '3 or more'){
    // Send user to next page
    res.redirect('juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('ineligible')
  }

})

// Run this code when a form is submitted to 'full-name-answer'
router.post('/full-name-answer', function (req, res) {
  var fullName = req.session.data['full-name']
  if (fullName == 'Sam'){
    // Send user to next page
    res.redirect('ineligible')
  } else {
    // Send user to ineligible page
    res.redirect('juggling-balls')
  }

})

module.exports = router
