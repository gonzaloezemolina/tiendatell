import express from 'express';
import config from './config/config.js';
import viewRouter from './routes/view.routes.js'
import __dirname from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/static`));

const PORT = config.app.port;

const server = app.listen(PORT, () => {console.log(`Servidor escuchando en el puerto ${PORT}`);
});



app.use('/', viewRouter);