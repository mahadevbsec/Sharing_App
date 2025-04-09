import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserModel } from "./module/User.js";
import { RecipesModel } from "./module/Recipe.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", UserModel);
app.use("/recipes", RecipesModel);

mongoose.connect(
  "mongodb+srv://mahadevags573:WunSUHYpDJeyHHXU@recipe.lsgewxn.mongodb.net/recipe?retryWrites=true&w=majority&appName=recipe",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log(" MongoDB Connected");
}).catch((err) => {
  console.error(" MongoDB Connection Failed:", err);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
