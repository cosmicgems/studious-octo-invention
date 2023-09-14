import connectDB from "../../../../lib/connectDB";
import User from "../../../../lib/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method === "POST"){
        try {
            await connectDB();
            const { registrationForm: 
                {
                    firstName, 
                    lastName, 
                    email:{email}, 
                    username,
                    address: {
                        line_one: a_1,
                        line_two: a_2,
                        city,
                        state,
                        zip
                    },
                    phone: {
                        sequence_one: p_1,
                        sequence_two: p_2,
                        sequence_three: p_3
                    },
                    social: {
                        sequence_one: s_1,
                        sequence_two: s_2,
                        sequence_three: s_3
                    },
                    birthDate: {
                        month,
                        day,
                        year
                    }, password
                }} = req.body;
            console.log(s_1,s_2,s_3, "Is it there?");
            
            const saltRounds = 15;
            const hashed_password = await bcrypt.hash(password, saltRounds)
            const saltRounds_2 = 5
            const hashed_s_1 = await bcrypt.hash(s_1, saltRounds_2);
            const hashed_s_2 = await bcrypt.hash(s_2, saltRounds_2);
            const hashed_s_3 = await bcrypt.hash(s_3, saltRounds_2);
            
            // console.log(registrationForm);
            let user = await new User();
            
            user.first_name = firstName;
            user.last_name = lastName;
            user.username = username;
            user.email = email;
            user.phone = {
                sequence_one: p_1.toString(),
                sequence_two: p_2.toString(),
                sequence_three: p_3.toString(),
            };
            user.birthdate = {
                month, day, year
            };
            user.securessn = {
                sequence_one: s_1.toString(),
                sequence_two: s_2.toString(),
                sequence_three: s_3.toString(),
            };
            user.address = {
                line_one: a_1,
                line_two: a_2,
                city,
                state,
                zip
            };
            user.password = hashed_password;

            // user.save();
            console.log(user);
            
            res.status(200).json({message: "Registration successful!", new_user: user, success:true  });

        } catch (error) {
            console.log(error);
            res.status(500).json({message: "There was an error in the process of registration. Please try again.", error:error})            
        }
    }
}