module.exports = function(options) {
  this.add({ role: 'hello', cmd: 'world' }, async function(input, reply) {
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