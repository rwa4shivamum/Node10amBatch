import { Category } from "../model/CategoryModel.js"

export const createCategory = async (req, res) => {
    try {
        const {name} = req.body
        if(!name){
            return res.status(400).json({
                status:false,
                message:"Name required"
            })
        }
        const CategoryExist = await Category.findOne({name});
        if(CategoryExist){
            return res.status(400).json({
                status:false,
                message:"Already Exist"
            })
        }
        const Category1 = await Category.create({name});
        res.status(201).json({
            status:true,
            message:"Category Created Succcessfully",
            data:Category1
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:`Error in Creating Category ${error.message}`
        })
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const category1 = await Category.find().sort({ createdAt: -1});
        res.status(200).json({
            status:true,
            message:"Get All category",
            data:category1
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:`Error in getAllCategory ${error.message}`
        })
    }
}