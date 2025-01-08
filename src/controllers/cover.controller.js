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
}