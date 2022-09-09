const json = require('../themes/dark_plus.json')
const fs = require('fs')
const { default: path } = require('path')

//* write this to a new file

// fs.writeFile(path, json)

const callback = (err) => {
  if (err) throw err
  console.log('success')
}

// fs.writeFile('new.js', JSON.stringify(json), callback)
// fs.writeFile('new.js', json, callback)

console.log(json)
