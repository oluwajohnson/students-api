const express = require('express');
const session = require('express-session');
require('dotenv').config();

const app = express();
const { initDb } = require('./data/database');

// Passport config
const passport = require('./config/passport');

// Middleware
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/students', require('./routes/students'));
app.use('/courses', require('./routes/courses'));
app.use('/', require('./routes/auth')); // 👈 AUTH ROUTES

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