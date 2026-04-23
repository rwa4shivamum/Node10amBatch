import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const registerUser = async(req, res)=>{
    let user;
    try {
        const {name, email, password} = req.body;
        //validation
        if(!name || !email || !password){
            res.status(400).json({
                status:false,
                message:"Payload missing"
            })
        }

        const existingUser = await User.findOne({email});
        if(existingUser == true){
            return res.status(400).json({
                status:false,
                message:"User Already Registered"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            name,
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            status:true,
            message:"User Created",
            data:user
        })
    } catch (error) {
        res.status(500).json({
           status:false,
           message:`Error in creating user ${error.message}`
        })
    } finally{
        console.log(user)
    }
}
