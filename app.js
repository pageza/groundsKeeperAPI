const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const personnelRouter = require('./routes/personnel')
const workRoutesRouter = require('./routes/workRoutes')
const workOrdersRouter = require('./routes/workOrders')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/personnel', personnelRouter);
app.use('/api/routes', workRoutesRouter);
app.use('/api/workorders', workOrdersRouter)

app.listen(6789)
module.exports = app;
