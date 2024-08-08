import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anjuzz1208:lHteJgXNLKS7foc0@cluster0.hdouqkt.mongodb.net/EatYummyNow').then(()=>console.log("DB Commected"));

}