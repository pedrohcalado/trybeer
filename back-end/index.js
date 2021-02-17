const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);
const dateFormat = require('dateformat');
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

const errorMiddleware = require('./middlewares/error');
const userController = require('./controllers/userController');
const productsController = require('./controllers/productsController.js');
const ordersController = require('./controllers/ordersController.js');
const salesController = require('./controllers/salesController.js');
const checkoutController = require('./controllers/checkoutController');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/', userController);
app.use('/orders', ordersController);
app.use('/admin/orders', salesController);
app.use('/checkout', checkoutController);
app.use('/products', productsController);
app.use(errorMiddleware);

app.use('/images/', express.static(path.join(__dirname, '/images')));

const PORT = 3001;
http.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
