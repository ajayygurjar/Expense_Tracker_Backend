const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./utils/db-connection");
const expenseRoutes = require("./routes/expenseRoutes");




app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/expenses", expenseRoutes);
sequelize.sync().then(() => {
  console.log("Database connected!");
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
