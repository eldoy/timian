#!/usr/bin/env node
const fs = require('fs')
const uglify = require('uglify-js')
const haka = require('../index.js')

const code = []
for (const fn in haka) {
  code.push(`window.${fn} = ${haka[fn].toString()}\n`)
}
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

fs.writeFileSync('./dist/timian.js', code.join('\n'))

const result = uglify.minify(code.join('\n'))
fs.writeFileSync('./dist/timian-min.js', result.code)
