import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://AnishKalbhor:anish2003@cluster0.uf9kq.mongodb.net/blog-app')
  console.log("Database Connected");
  
};