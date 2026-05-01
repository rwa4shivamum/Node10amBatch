import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    try {
        let token = req.headers.token;
        console.log(token)
        //GET token from header
        // if(req.headers.authorization && req.headers.authorization.startWith("Bearer")){
        //     token = req.headers.authorization.split(" ")[1];
        // }
        if(!token){
            return res.status(401).json({
                status:false,
                message:"Unauthorized- Users"
            })
        }

        //verify
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        req.user = decoded;
        console.log(decoded)
        next();//valve open
    } catch (error) {
        return res.status(401).json({
            status:false,
            message:"Unauthorized - Invalid token",
        })
    }
}