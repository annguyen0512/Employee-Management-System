import express from "express";
import cors from "cors";
import {adminRouter} from "./Routes/AdminRoute.js";

const app = express();
const port = 3000;
app.use(cors({
    origin:["http://localhost:5173"],
    method: ['GET','POST','PUT'],
    credentials: true
}));
app.use(express.json());
app.use("/auth",adminRouter);


app.listen(port, () => {
    console.log("Server is running!")
})
