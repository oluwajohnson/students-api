const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Students API',
    description: 'Project 2 API'
  },
  host: 'students-api-hy38.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);