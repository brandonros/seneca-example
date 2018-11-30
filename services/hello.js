module.exports = function(options) {
  this.add({ cmd: 'hello-world:v1' }, async function(input, reply) {
    try {
      console.log({
        input: input
      })

      var result = { message: 'Hello, world!' };

      reply(null, result);
    } catch (err) {
      reply(err, null);
    }
  });
};