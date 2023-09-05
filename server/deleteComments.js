const fs = require("fs");

// Чтение JSON-файла
const jsonData = fs.readFileSync("comments.json", "utf-8");
const comments = JSON.parse(jsonData);

// Удаление комментариев из всех комментов
function removeComments(comment) {
  comment.replies = [];
  if (comment.replies && comment.replies.length > 0) {
    comment.replies.forEach(removeComments);
  }
}

comments.forEach(removeComments);

// Сохранение JSON-файла без комментариев
fs.writeFileSync(
  "comments_without_comments.json",
  JSON.stringify(comments, null, 2),
  "utf-8"
);
