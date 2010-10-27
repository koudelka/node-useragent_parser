# Node.js Useragent Parser

A port, with some minor modifications, of Google's UA parser.

## Usage
<code>
  var useragent_parser = require('./useragent_parser')

  var useragent = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-GB) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.141 Mobile Safari/534.1+,gzip(gfe),gzip(gfe)'

  useragent_parser.parse(useragent) // => { family: 'Blackberry', v1: '6', v2: '0', v3: '0' }
  useragent_parser.prettyParse(useragent) // => ""Blackberry 6.0.0"
</code

## Tests
The tests roughly copy the tests from the original.
`node test/test_user_agent_parser.js`

## Benchmarks
The benchmarks parse all of the user agents in benchmark/sample_user_agents.csv.
`node benchmark/benchmark.js`

## Links
The original parser: http://code.google.com/p/browserscope/source/browse/trunk/models/user_agent_parser.py
A list of useragents: http://code.google.com/p/browserscope/source/browse/trunk/test/sample_user_agents.csv
