require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Product } = require('./models/Product');

const app = express();
const http = require('http').Server(app);
const compression = require('compression');
const multer = require('multer');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const productRouter = require('./routes/productsRoutes');

app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//Routes
app.use('/api/v1', productRouter);
// app.use('/auth', AuthRoute);
// app.get('/protected', (req, res) => {
// Access the user information from req.user
// const userId = req.user.userId;
// Handle the protected route logic
// res.send(`Protected route accessed by user ${userId}`);
// });
// serve front
// app.use(express.static(path.join(__dirname, 'front', 'build')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'));
// });
//Conection
const port = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;
console.log({ port, CONNECTION_URL });

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    http.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
