import dotenv from 'dotenv';

dotenv.config();

export default{
    db:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    },
    app:{
        port: process.env.PORT,
        secret: process.env.SECRET
    }
};

