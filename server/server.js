const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("src"));

// Создали экземпляр приложения
const port = 3001;
DB_URL =
  "mongodb+srv://root:1234@cluster0.gltfhah.mongodb.net/?retryWrites=true&w=majority";

app.use(
  cors({
    origin: ["http://example.com", "http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
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
  res.send("сервер работает");
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

      const { postId } = req.query;

      if (postId) {
        const filteredComments = comments.filter(
          (comment) => comment.postId == postId
        );

        res.json(filteredComments);
      } else {
        res.json(comments);
      }
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

app.post("/addComment", (req, res) => {
  console.log("перед try", req.body);
  try {
    console.log(req.body);

    const { date, name, message, email, postId, commentId, photo, replies } =
      req.body;

    const newComment = {
      message,
      name,
      email,
      postId,
      date,
      commentId,
      photo,
      replies,
    };

    const commentsData = JSON.parse(
      fs.readFileSync("./server/comments.json", "utf8")
    );
    commentsData.push(newComment);

    fs.writeFileSync(
      "./server/comments.json",
      JSON.stringify(commentsData, null, 2)
    );

    res.status(200).json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Error adding comment" });
  }
});

app.post("/addReply", (req, res) => {
  try {
    console.log(req.body);

    const {
      date,
      name,
      message,
      email,
      postId,
      commentId,
      photo,
      replies,
      repliedTo,
    } = req.body;

    const newReply = {
      message,
      name,
      email,
      postId,
      date,
      commentId,
      photo,
      replies,
      repliedTo,
    };

    const commentsData = JSON.parse(
      fs.readFileSync("./server/comments.json", "utf8")
    );
    // commentsData.push(newComment);
    commentsData.forEach((comment) =>
      comment.postId === repliedTo
        ? newReply.push(comment.name, comment.message, comment.data)
        : false
    );

    fs.writeFileSync(
      "./server/comments.json",
      JSON.stringify(commentsData, null, 2)
    );

    res.status(200).json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Error adding comment" });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
