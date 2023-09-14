import connectDB from "../../../../lib/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import FreeConsultation from "../../../../lib/models/freeConsultation";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'POST') {
        try {
            await connectDB()
            const {form:{first_name, last_name, email, phone:{sequence_one:s_1, sequence_two:s_2, sequence_three:s_3}, address:{line_one:a_1, line_two:a_2, city, state, zip}}} = req.body;
            console.log(s_1, s_2, s_3, a_1, a_2);
            
            const consultation = await new FreeConsultation();


            res.status(200).json({message: "Form successfully submitted! A representative will be in touch shortly.", form:req.body})
        } catch (error) {
            
        }
    } else {
        res.status(500).json({message: "Your request is unauthorized."})
    }
}