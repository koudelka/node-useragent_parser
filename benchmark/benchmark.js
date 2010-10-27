var
  csv = require('ya-csv'),
  assert = require('assert'),
  parse = require('./../lib/useragent_parser').parse

var reader = csv.createCsvFileReader(__dirname + '/sample_user_agents.csv')

var useragents = []
reader.addListener('data', function(data) {
  useragents.push(data[2])
})
  
reader.addListener('end', function() {
  var start = new Date()

  useragents.forEach(function(useragent) {
    parse(useragent)
  })

  var stop = new Date()
  console.log('Parsed ' + useragents.length + ' useragents in ' + (stop - start) + ' msecs, ~' + parseInt(useragents.length * 1000 / (stop - start)) + '/s')
})
