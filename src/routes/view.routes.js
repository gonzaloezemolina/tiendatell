import { Router } from "express";
import __dirname from "../utils.js";

const router = Router();

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

export default router;