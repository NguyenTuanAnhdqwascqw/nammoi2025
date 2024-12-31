const express = require("express");
const app = express();
const path = require("path");

///////////////////////////////////////////////////////////


app.use(express.static("view"));
app.set("views", __dirname + "/view");

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname + "/view/index.html"));
});

app.get("/hny", async (request, response) => {
  response.sendFile(__dirname + "/view/intro.html");
});


app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

const listener = app.listen(process.env.PORT, () =>
  console.log(`Đã mở tại port: http://localhost:${listener.address().port}`)
);