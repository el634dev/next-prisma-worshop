import { prisma } from "lib/prisma";

export default async function handler(req, res){
    const { name, email, message, feedbackType } = req.body;
    try {
        await prisma.feedback.create({
            data:{
                email,
                name,
                feedbackType,
                message, 
            },
        });

        res.status(200).json({message:"Submitted successfully"});
    } catch(error) {
        res.status(400).json({ error });
    }
}