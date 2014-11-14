var st = require('st')
var http = require('http')
var url = require('url')
var qs = require('qs')
var fs = require('fs')

var list = require('./guestlist.json')

var mount = st({ path: __dirname, url: '/', index: 'index.html' })
http.createServer(function(req, res) {
  var u = url.parse(req.url)
  var query = qs.parse(u.query)

  if (u.pathname == '/rsvp') {
    list.push(query)
    fs.writeFileSync('./guestlist.json', JSON.stringify(list))
    return res.end('rsvpd')
  } else {
    return mount(req, res)
  }

}).listen(80)
