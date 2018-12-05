module.exports = function(options) {
  this.add({ cmd: 'hello-world:v1' }, async function(input, reply) {
    try {
      console.log({
        input: input
      })

      var result = { message: 'Hello, world!4' };

      reply(null, result);
    } catch (err) {
      reply(err, null);
    }
  });
};