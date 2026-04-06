async function routes(fastify, options) {

  fastify.get('/', async (request, reply) => {
    return { message: 'Hello Fastify API 🚀' }
  })

  fastify.get('/ping', async () => {
    return { pong: true }
  })

}

module.exports = routes
