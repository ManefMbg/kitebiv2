import express from "express";
import dotenv from "dotenv";
import Connection from "./db.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { AdminRouter } from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser());
Connection();
app.use("/auth", AdminRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});



// crud

// get data
app.get("/", async(req,res) => {
  const data = await userModel.find({})
  res.json({success : ture , data : data})
})


// create data
app.post("/create", async(req,res) => {
  console.log(req.body)
  const data = new userModel(req.body)
  await data.save()

  res.send({success : true, message : "data save successfully!!"})
})


// update data
app.put("/update", async(req,res) => {
  console.log(req.body)
  const {id,...rest} = req.body

  console.log(rest)
  const data = await userModel.updateOne({_id : id},rest)
  res.send({success : true, message : "data updated successfully!!", data : data})
})


// delete data
app.delete("/delete", async(req,res) => {
  const id = req.params.id
  console.log(id)

  const data = await userModel.deleteOne({_id : id})
  res.send({success : true, message : "data deleted successfully!!", data : data})
})