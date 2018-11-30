var Seneca = require('seneca');

var servicesPort = 9090;

var client = Seneca({timeout: 1000 * 60 * 60 * 4})
  .client({type: 'tcp', port: servicesPort, timeout: 1000 * 60 * 60 * 4});

var callService = function(parameters) {
  return new Promise(function(resolve, reject) {
    client.act(parameters, function(err, res) {
      if (err) {
        return reject(err);
      }

      resolve(res);
    });
  });
};

(async function() {
  var result = await callService({
    cmd: 'hello-world:v1',
    input: '123456'
  });

  console.log(result);

  process.exit(0);
})();
