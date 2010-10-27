var
  csv = require('ya-csv'),
  assert = require('assert'),
  parse = require('./../useragent_parser').prettyParse

var reader = csv.createCsvFileReader('./sample_user_agents.csv')

reader.addListener('data', function(data) {
  var expect = data[0],
      dunno  = data[1],
      useragent = data[2]

  if (expect != parse(useragent)) {
    console.log("FAILED: '" + useragent + '"')
    console.log("\texpected: " + expect)
    console.log("\tgot: " + parse(useragent))
  }
    
})
  

