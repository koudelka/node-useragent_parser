#!/usr/bin/env node

var 
  assert = require('assert'),
  parser = require('./../useragent_parser').parse

var test_strings = {
  'Opera/10.00 (Windows NT 5.1; U; en) Presto/2.2.0':
  ['Opera', '10', '00'],

  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.1pre) Gecko/20090717 Ubuntu/9.04 (jaunty) Shiretoko/3.5.1pre' :
  ['Firefox (Shiretoko)', '3', '5', '1pre'],

  'Mozilla/5.0 (X11; U; Linux; de-DE) AppleWebKit/527 (KHTML, like Gecko, Safari/419.3) konqueror/4.3.1,gzip(gfe)' :
  ['Konqueror', '4', '3', '1'],

  'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; chromeframe; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; Sleipnir 2.8.5),gzip(gfe),gzip(gfe)':
  ['Sleipnir', '2', '8', '5'],

  'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB6; chromeframe; .NET CLR 2.0.50727; .NET CLR 1.1.4322; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729),gzip(gfe),gzip(gfe)':
  ['IE', '8', '0', null],

  'Midori/0.2 (X11; Linux; U; en-us) WebKit/531.2 ,gzip(gfe),gzip(gfe)':
  ['Midori', '0', '2', null],

  'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.3a1) Gecko/20100208 MozillaDeveloperPreview/3.7a1 (.NET CLR 3.5.30729),gzip(gfe),gzip(gfe)':
  ['MozillaDeveloperPreview', '3', '7', 'a1'],

  'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.5.24 Version/10.53':
  ['Opera', '10', '53', null],

  'Opera/9.80 (S60; SymbOS; Opera Mobi/275; U; es-ES) Presto/2.4.13 Version/10.00,gzip(gfe),gzip(gfe)':
  ['Opera Mobile', '10', '00', null],

  'Mozilla/5.0 (webOS/1.2; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Desktop/1.0,gzip(gfe),gzip(gfe)':
  ['Palm webOS', '1', '2', null],

  'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10,gzip(gfe),gzip(gfe)':
  ['iPad', '3', '2', null],

  'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500XXJEE; U; Bada/1.0; nl-nl) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 OPN-B':
  ['Dolfin', '2', '0', null],

  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/2.101) AppleWebKit/530  (KHTML, like Gecko) Version/4.0 Safari/530.17,gzip(gfe),gzip(gfe)':
  ['BOLT', '2', '101', null],

  'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-GB) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.141 Mobile Safari/534.1+,gzip(gfe),gzip(gfe)':
  ['Blackberry', '6', '0', '0'],

  'SomethingWeNeverKnewExisted':
  ['Other', null, null, null]
}

for(var useragent in test_strings) {
  var parsed_ua = parser(useragent)

  var
    family = test_strings[useragent][0],
    v1 = test_strings[useragent][1],
    v2 = test_strings[useragent][2],
    v3 = test_strings[useragent][3]

  assert.equal(parsed_ua.family, family)
  assert.equal(parsed_ua.v1, v1)
  assert.equal(parsed_ua.v2, v2)
  assert.equal(parsed_ua.v3, v3)
}

console.log("All tests passed.")
