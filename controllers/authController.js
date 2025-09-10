import { registerUser,loginUser } from "../services/authService.js";
import { generateToken } from "../middleware/authMiddleware.js";


export async function registerC(req,res) {
    const {username,password} = req.body;
    try {
        const user = await registerUser(username,password);
        res.json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

export async function loginC(req,res) {
    const {username,password} = req.body;

    try{
        const user = await loginUser(username,password);

        const token =  generateToken(user.username);
        res.json({token});
    }catch(err){
        res.status(401).json({error: err.message});
    }
}