import express from "express";
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import itemRoutes from "./routes/itemRoutes";
import cartRoutes from "./routes/cartRoutes";
import connectToDb from "./db/connect.ToDb";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import protectRoute from "./middlewares/protectRoute";

dotenv.config({    // must be declared before the app is created
  path: path.resolve(__dirname, "../../.env")
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://e-commerce-64e1.onrender.com",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.use("/api/users", protectRoute, userRoutes)
app.use("/api/items", protectRoute, itemRoutes)
app.use("/api/cart", protectRoute, cartRoutes)


// HANDLE FRONTEND  (must be declared after the API routes)
app.use(express.static(path.join(__dirname, '../../FE/dist'))); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../FE/dist', 'index.html'));
});

app.get("/", (req, res) => {
  res.send("E-commerce API running here...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDb();
});