const assert = require('assert')
const timian = require('../index.js')

async function run() {
  let date1, date2, result

  /**
   * Test days
   */

  // Test days from now
  date1 = new Date()
  date1.setDate(date1.getDate() - 2)
  result = timian.days(date1)
  assert.equal(result, 2)

  // Test days between two dates
  date1 = new Date()
  date1.setDate(date1.getDate() - 2)
  date2 = new Date()
  date2.setDate(date2.getDate() - 5)
  result = timian.days(date1, date2)
  assert.equal(result, 3)
}

run()
