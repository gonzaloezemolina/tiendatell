import { Router } from "express";
import coverController from "../controllers/cover.controller.js";

const coverService = new coverController();
const router = Router();

router.post('/create', coverService.createCover);
router.get('/get', coverService.getCovers);
router.put('/update/:id', coverService.updateCover);
router.delete('/delete/:id', coverService.deleteCover);


export default router;