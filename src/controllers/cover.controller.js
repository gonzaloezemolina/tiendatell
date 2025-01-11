import coverModel from "../models/cover.model.js"

export default class coverController {
    createCover = async (req,res) => {
        try {
            const {image_url} = req.body;
            if (!image_url) {
                return res.status(500).send('Es distinto a image_url');
            }
            const newCover = await coverModel.createCover(image_url);
            if (newCover) {
                return res.status(200).json({message:"Cover created"});
            }
        } catch (error) {
            console.log("Error createCover, coverController:", error);
        }
    }
    
    getCovers = async (req,res) => {
        try {
            const covers = await coverModel.getCovers();
            if (covers) {
                return res.status(200).json(covers);
            }
        } catch (error) {
            console.log("Error getCovers, coverController:", error);
        }
    }

    updateCover = async (req,res) => {
        try {
            const {id} = req.params;
            const {image_url} = req.body;
            if (!image_url) {
                return res.status(500).send('Es distinto a image_url');
            }
            const updateCover = await coverModel.updateCover(id,image_url);
            if (updateCover) {
                return res.status(200).json({message:"Cover updated"});
            }
        } catch (error) {
            console.log("Error updateCover, coverController:", error);
        }
    }

    deleteCover = async (req,res) => {
        try {
            const {id} = req.params;
            const deleteCover = await coverModel.deleteCover(id);
            if (deleteCover) {
                return res.status(200).json({message:"Cover deleted"});
            }
        } catch (error) {
            console.log("Error deleteCover, coverController:", error);
        }
    }
}