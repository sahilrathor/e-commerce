import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import User from "../models/userModel";

const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    // // for bearer token testing
    // const token2 = req.headers.authorization;
    // console.log(token,"\n", token2?.split(' ')[1]);
    
    if (!token) {
        return res.status(401).json({ message: "unauthorized user" });
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decoded;
        
        const user = await User.findById((req as any).user.userId);
        if (!user) {
            return res.status(401).json({ message: "unauthorized user" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

export default protectRoute;