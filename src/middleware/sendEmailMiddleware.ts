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
      text: content,
      html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h1 style="color: #0056b3;">Witamy w Groomer!</h1>
        <p>Twoje konto zostało pomyślnie utworzone. Poniżej znajdziesz swoje dane logowania:</p>
        <p><strong>Hasło:</strong> ${content}</p>
       <br></br>
        <p>Prosimy o zmianę hasła po pierwszym zalogowaniu.</p>
        <p>Pozdrawiamy,<br>Zespół Supportu</p>
      </div>
    `
    };

    await transporter.sendMail(mailOptions);
    
 

  } catch (error) {
    console.log(`ERROR: ${error}`);

  }
};