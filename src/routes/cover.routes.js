import { Router } from "express";
import coverController from "../controllers/cover.controller.js";

const coverService = new coverController();
const router = Router();

router.post('/create', coverService.createCover);


export default router;