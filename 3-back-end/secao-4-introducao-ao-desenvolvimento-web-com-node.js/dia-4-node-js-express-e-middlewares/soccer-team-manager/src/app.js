const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const teamsRouter = require('./routes/teamsRouter');

const app = express();

const limiter = rateLimit({
  max: 100, // número máximo de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
});

app.use(express.json());
app.use(express.static('./images'));
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(limiter);
app.use('/teams', teamsRouter);

app.use((req, res) => res.sendStatus(404));

module.exports = app;