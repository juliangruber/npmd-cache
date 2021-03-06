
//TODO: redo all of this with tests and stuff...

var github = require('npm-github-resolve-url')

module.exports = function (pkg) {
  var name, version, m
  //pkg
  if('object' === typeof pkg && pkg.name && pkg.version) {
    name = pkg.name
    version = pkg.version
  }
  //module@version
  else if(m = /^([\w._-]+)@(.*)$/.exec(pkg)) {
    name = m[1]
    version = m[2]
    return 'https://registry.npmjs.org/' + name + '/-/' + name + '-' + version + '.tgz'
  }

  //handle multilpe type of github urls,
  //including git urls (which will download from github http download api)
  if(m = github(pkg))
    return m

  //http url
  else if(/(https?:\/\/.+)/.test(pkg)) {
    return pkg
  } 
  
  throw new Error('loading modules from format:' + pkg + 'not yet implemented')
}


