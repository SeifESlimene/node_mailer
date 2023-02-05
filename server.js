const express = require("express");
const path = require("path");

const sendMail = require("./mail");

const app = express();
const router = express.Router();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.post("/email", (req, res) => {
  const { name, subject, email, text } = req.body;
  console.log("Data: ", req.body);

  sendMail(name, email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.status({ message: "Email sent!!!" });
    }
  });
});

router.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use(router)

app.listen(8080, () => console.log("Server Is Starting On Port,", 8080));
