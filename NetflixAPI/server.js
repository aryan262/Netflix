const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userroutes")

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Netflix/netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected");
}).catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});