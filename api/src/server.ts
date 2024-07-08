import fastify from "fastify"

const app = fastify()

app.get('/test', () => {
  return 'API'
})

app.listen({ port: 3333 }).then(() => {
  console.log('API is listening on port 3333')
})