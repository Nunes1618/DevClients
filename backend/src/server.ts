import Fastify from 'fastify';
import routes = require('./routes');
import cors from '@fastify/cors';
import console = require('console');

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message})
})

// Essa função está diferente da do vídeo, necessário ter feito ajuste para o delete
const start = async () => {
    await app.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });
    await app.register(routes.routes);

    try{
        await app.listen({ port: 3333 })
    }catch(err){
        process.exit(1)
    }
}

start();