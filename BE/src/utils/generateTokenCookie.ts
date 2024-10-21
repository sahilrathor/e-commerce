import { Response } from 'express';
import jwt from 'jsonwebtoken';


const generateTokenCookie = (userId: string,  rememberMe: boolean) => {
    const expires = rememberMe ? 7 : 1;
    
    const token = jwt.sign({ userId, appName: process.env.APP_NAME }, process.env.JWT_SECRET!, {expiresIn: `${expires}d`});
    // send userId as object 

    return { token };

    // res.cookie("token", token, {
    //     httpOnly: process.env.NODE_ENV !== "development",
    //     secure: process.env.NODE_ENV !== "development",
    //     sameSite: "strict",
    //     maxAge: expires * 24 * 60 * 60 * 1000
    // })
}

export default generateTokenCookie;