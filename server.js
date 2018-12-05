var Seneca = require('seneca');
var glob = require('glob');

var servicesPort = 9090;
var servicesPath = './services';

var server = Seneca({timeout: 1000 * 60 * 60 * 4})
  .listen({type: 'tcp', port: servicesPort, timeout: 1000 * 60 * 60 * 4});

var requireUncached = function(moduleName) {
  delete require.cache[require.resolve(moduleName)]
  return require(moduleName)
}

var initServices = function() {
  var files = glob.sync(servicesPath + '/**/**.js');

  files.forEach(function(file) {
    server.use(requireUncached(file));
  });
};

(async function() {
  initServices();

  console.log(`Server up on ${servicesPort}`);
})();

process.on('SIGUSR2', function() {
  initServices();
  console.log('Reloaded');
});

