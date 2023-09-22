import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import clientRouter from './routes/clientRouter.js';
import productCategoryRouter from './routes/productCategoryRouter.js';
import itemCategoryRouter from './routes/itemCategoryRouter.js';
import productItemRouter from './routes/productItemRouter.js';

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  );
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use('/user', userRouter);
app.use('/client', clientRouter);
app.use('/productCategory', productCategoryRouter);
app.use('/itemCategory', itemCategoryRouter);
app.use('/productItem', productItemRouter);

app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

const startServer = async () => {
  try {
    // connect to mongodb
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();