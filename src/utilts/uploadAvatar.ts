import { v2 as cloudinary } from 'cloudinary';
import { Express } from 'express';

export const uploadAvatar = async (avatarFile: Express.Multer.File): Promise<string> => {
  const b64 = Buffer.from(avatarFile.buffer).toString("base64");
  let dataURI = "data:" + avatarFile.mimetype + ";base64," + b64;
  const cloudinaryResponse = await cloudinary.uploader.upload(dataURI);
  return cloudinaryResponse.url;
};
