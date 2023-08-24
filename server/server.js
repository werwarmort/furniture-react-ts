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
      // const data = fs.readFile("./server/comments.json", "utf8");
      const comments = JSON.parse(data);
      // console.log("полученные комменты на сервере: ", comments);

      const { postId } = req.query;
      console.log("постID пришедший на сервер", postId);

      if (postId) {
        const filteredComments = comments.filter(
          (comment) => comment.postId == postId
        );

        res.json(filteredComments);
        console.log("отфильтрованные комменты: ", filteredComments);
      } else {
        res.json(comments);
      }
    } catch (parseError) {
      console.error("Ошибка парсинга JSON:", parseError);
      res.status(500).json({ error: "Ошибка при обработке данных" });
    }
  });
});

// app.get("/comments", async (req, res) => {
//   try {
//     const data = fs.readFile("./server/comments.json", "utf8");
//     const comments = JSON.parse(data);

//     const { postId } = req.query;

//     if (postId) {
//       const filteredComments = comments.filter(
//         (comment) => comment.postId === postId
//       );
//       res.json(filteredComments);
//     } else {
//       res.json(comments);
//     }
//   } catch (error) {
//     console.error("Ошибка:", error);
//     res.status(500).json({ error: "Произошла ошибка" });
//   }
// });

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

// const comments = require('./comments.json'); // Загрузите данные комментариев

// app.get("/comments", (req, res) => {
//   fs.readFile("./server/comments.json", "utf8", (err, data) => {
//     if (err) {
//       console.error("Ошибка чтения файла:", err);
//       res.status(500).json({ error: "Произошла ошибка" });
//       return;
//     }
//     try {
//       const comments = JSON.parse(data);
//       res.json(comments);
//     } catch (parseError) {
//       console.error("Ошибка парсинга JSON:", parseError);
//       res.status(500).json({ error: "Ошибка при обработке данных" });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
