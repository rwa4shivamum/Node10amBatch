import { User } from "../model/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const Register = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            res.status(400).json({
                status:false,
                message:"Payload missing"
            })
        }
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                status:false,
                message:`User Exist`
            })
        }

        //Hash Password;
        const hashPassword = await bcrypt.hash(password,10);
        const user = await User.create({name, email, password:hashPassword})//$2b$10$xfBJ2voHV0L956ZBsz.BXuC.cGuQil7eBb/u.U9TTsNpNXVqWa8tC
        return res.status(201).json({
            status:true,
            message:"User Registerd",
            data:user
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:`Error in ${error.message}`
        })
    }
}


export const login = async(req, res) => {
    try {
        const {email, password} = req.body;
         
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                status:false,
                message:"User not Found First register"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                message:"Invalid Password"
            })
        }

        //create Token 
        const token = jwt.sign(
            {id:user._id,email:user.email},process.env.JWT_SECRET_KEY,{expiresIn:"30s"}
        )
        return res.status(200).json({
            status:true,
            message:"user Logged In Successfully",
            data:token
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:`Error while ${error.message}`
        })
    }
}