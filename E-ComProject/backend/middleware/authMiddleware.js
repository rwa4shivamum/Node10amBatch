import jwt from 'jsonwebtoken'

export const middleWare = (req, res, next) => {
    const token = req.headers.token
    try {
        if(!token){
            return res.status(401).json({message: "No token"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decoded;
        console.log(decoded);
        next();
    } catch (error) {
        res.status(401).json({message:"Invalid token"})
    }
}