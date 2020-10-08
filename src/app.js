'use strict';

const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const createError = require('http-errors');

// DB Connection
require('./config/connection');

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/favicon.ico', (_request, response) => response.status(204));
app.use('/', indexRouter);
app.use('/', usersRouter);

// catch 404 and forward to error handler
app.use((_request, _response, next) => next(createError(404)));

// error handler
app.use((error, request, response, _next) => {
    // set locals, only providing error in development
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};

    // render the error page
    response.status(error.status || 500);
    response.json({
        error: error
    });
});

module.exports = app;