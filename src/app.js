import express from 'express';
import session from 'express-session';
import handlebars from 'express-handlebars';
import config from './config/config.js';
import path from 'path';
import __dirname from './utils.js';
import morgan from 'morgan';
import viewRouter from './routes/view.routes.js';
import productRouter from './routes/product.routes.js';
import coverRouter from './routes/cover.routes.js';
import sessionRouter from './routes/session.routes.js';
import pool from './config/db.js';
import pgSession from 'connect-pg-simple';

const postgreSession = pgSession(session);

const app = express();
app.use(session({
    store: new postgreSession({
      pool: pool,
      tableName: 'sessions'  
    }),
    secret: config.app.secret, 
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,  
        secure: false  
    }
})
)

app.engine('.hbs', handlebars.engine({
  extname:'hbs',
  defaultLayout:'main',
  layoutsDir:path.join(__dirname,'views/layout'),
  partialsDir:path.join(__dirname, 'views/partials'),
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/static`));
app.use(morgan('dev'))

const PORT = config.app.port;

const server = app.listen(PORT, () => {console.log(`Servidor escuchando en el puerto ${PORT}`);
});


app.use('/', viewRouter);
app.use('/api', productRouter);
app.use('/api', sessionRouter);
app.use('/api/covers', coverRouter);