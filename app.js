const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const personnelRouter = require('./routes/personnel')
const workRoutesRouter = require('./routes/workRoutes')
const workOrdersRouter = require('./routes/workOrders')
const schoolsRouter = require('./routes/schools')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
})

app.use('/api/personnel', personnelRouter);
app.use('/api/routes', workRoutesRouter);
app.use('/api/workorders', workOrdersRouter);
app.use('/api/schools', schoolsRouter);

app.listen(6789)
module.exports = app;
