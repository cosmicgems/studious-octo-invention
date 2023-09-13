import connectDB from "../../../../lib/connectDB";
import User from "../../../../lib/models/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method === "POST"){
        try {
            await connectDB();
            const { registrationForm} = req.body;
            console.log(registrationForm);
            res.status(200).json({message: "Registration successful!", registrationForm})
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "There was an error in the process of registration. Please try again.", error:error})            
        }
    }
}