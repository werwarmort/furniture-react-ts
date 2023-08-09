const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(express.static("src"));

// Настройка заголовков для CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Привет, это ваш сервер!");
});

app.get("/comments", (req, res) => {
  fs.readFile("./server/comments.json", "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка чтения файла:", err);
      res.status(500).json({ error: "Произошла ошибка" });
      return;
    }
    try {
      const comments = JSON.parse(data);
      res.json(comments);
    } catch (parseError) {
      console.error("Ошибка парсинга JSON:", parseError);
      res.status(500).json({ error: "Ошибка при обработке данных" });
    }
  });
});

app.get("/posts", (req, res) => {
  fs.readFile("./server/posts.json", "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка чтения файла:", err);
      res.status(500).json({ error: "Произошла ошибка" });
      return;
    }
    try {
      const comments = JSON.parse(data);
      res.json(comments);
    } catch (parseError) {
      console.error("Ошибка парсинга JSON:", parseError);
      res.status(500).json({ error: "Ошибка при обработке данных" });
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
