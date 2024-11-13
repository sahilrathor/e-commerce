import express, { Request, Response } from "express";
import User from "../../models/userModel";

const getUserProfile = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(!user) {
        return res.status(404).json({ error: "User not found" });
    }


    res.status(200).json(user);
}

export default getUserProfile;