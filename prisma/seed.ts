import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const main = async() => {
    const newFeedback = await prisma.feedback.create({
        data:{
            email: "kenobi@gmail.com",
            message: "Hey, this is cool",
            name: 'Kenobi',
        }
    });
};