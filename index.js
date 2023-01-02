const days = function (a, b = new Date()) {
  return Math.abs(parseInt((b - a) / 864e5))
}

module.exports = { days }
