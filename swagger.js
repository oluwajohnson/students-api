const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Students API',
    description: 'Project 2 API'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);