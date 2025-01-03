import express from 'express';
import config from './config/config.js';
import __dirname from './utils.js';
import morgan from 'morgan';
import viewRouter from './routes/view.routes.js';
import productRouter from './routes/product.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/static`));
app.use(morgan('dev'))

const PORT = config.app.port;

const server = app.listen(PORT, () => {console.log(`Servidor escuchando en el puerto ${PORT}`);
});



app.use('/', viewRouter);
app.use('/api', productRouter);