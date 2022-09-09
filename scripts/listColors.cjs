const json = require('../themes/dark_plus.json');

//* This script imports a JSON file and
//* extracts all the colors within the "tokenColors" array

const colors = []

json.tokenColors.forEach(o => {
  const color = o.settings.foreground

  if (!colors.includes(color)) colors.push(color)
})

console.log('colors: ', colors) 
