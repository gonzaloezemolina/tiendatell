import { Router } from "express";
import __dirname from "../utils.js";

const router = Router();

// Endpoints

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

router.get('/about', (req,res) => {
    res.sendFile(__dirname + '/views/about.html');
});

router.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

router.get('/how-to-buy', (req,res) => {
    res.sendFile(__dirname + '/views/how-to-buy.html');
});

router.get('/agendas', (req,res) => {
    res.sendFile(__dirname + '/views/agendas.html');
});

router.get('/books', (req,res) => {
    res.sendFile(__dirname + '/views/books.html');
});

router.get('/register', (req,res) => {
    res.sendFile(__dirname + '/views/register.html');
});

export default router;