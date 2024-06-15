import { NextFunction, Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendEmailMiddleware = async ({email,content}:{email:string,content:string}) => {
  try {


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:"smtp.gmail.com",
      auth: {
        user: process.env.GMAIL_SENDER_ADRESS as string,
        pass: process.env.GMAIL_PASSWORD as string,
      }
    });

    const mailOptions = {
      from: 'adamhuras94@gmail.com', // tutaj wpisz swój adres e-mail
      to: email,
      subject: 'Your account has been created',
      text: content
    };

    await transporter.sendMail(mailOptions);
    
 

  } catch (error) {
    console.log(`ERROR: ${error}`);

  }
};