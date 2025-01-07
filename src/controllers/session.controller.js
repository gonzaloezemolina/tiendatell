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

    login = async (req,res) => {
        try {
            const {email,password} = req.body;
            console.log('Datos recibidos:', {email, password});
            if (! email || ! password) {
                return res.status(400).json({message:'User not found'});
            }
            const result = await userModel.getUserByCredentials(email,password);
            if (!result) {
                return res.status(400).send({message:'Credenciales incorrectas'})
            }
            req.session.user = {
                id: result.id,
                email: result.email
            };
          
            res.status(200).json({
                message: "Logueado correctamente",
                user: {
                    id: result.id,
                    email: result.email,
                    role: result.role
                }
            });
        } catch (error) {
            console.log("Error en el login, sessionController:", error);
        }
    }

    logout = (req,res) => {
        try {
            req.session.destroy(error => {
                if (error) {
                    return res.status(500).send("Error in logout");
                } else {
                    return res.status(200).json({message:"Sucess in logout"});
                }
            })
        } catch (error) {
            console.log("Error en el logout, sessionController:", error);
        }
    }
}