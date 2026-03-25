const express = require('express');
const app = express();

const { initDb } = require('./data/database');

app.use(express.json());

// Routes
app.use('/students', require('./routes/students'));
app.use('/courses', require('./routes/courses'));

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});