const express = require("express");
const router = require("./routers");
const { sequelize } = require("./model");

const app = express();
const PORT = process.env.PORT || 3000;

// thường thì khi lên production thì sẽ để alter để có performent tốt nhất, do ko cần tạo lại toàn bộ db
// còn ở dev enviroment thì nên để force, để đỡ bị lỗi ở db, do mỗi lần lưu mới là sẽ tạo mới lại db hoàn toàn
// sequelize.sync({ force: true });
sequelize.sync({ alter: true });

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("Server is listen on port", PORT);
});
