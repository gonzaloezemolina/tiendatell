import userModel from "../models/user.model.js";

export default class sessionController{
    register = async (req,res) => {
        try {
            const {name,email,password} = req.body;
            const createUser = await userModel.createUser(name,email,password);
            res.status(200).json({message:'register in controller is working well'});
        } catch (error) {
            console.log("Error en register, sessionController:", error);
        }
    };
}