const fs = require("fs");
const faker = require("faker");

const NUM_COMMENTS = 400;

const generateComment = (postId) => {
  return {
    postId,
    name: faker.Name.findName(),
    email: faker.Internet.email(), // Добавили генерацию email
    date: faker.Date.between(2015, 2023),
    message: faker.Lorem.words(Math.floor(Math.random() * 35) + 5).join(" "), // Используем .join(' ') для объединения слов в текст
    photo: faker.Image.avatar(),
    replies: [],
  };
};

const generateComments = () => {
  const comments = [];

  for (let postId = 1; postId <= NUM_COMMENTS / 4; postId++) {
    const numComments = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < numComments; i++) {
      const comment = generateComment(postId);

      const numReplies = Math.floor(Math.random() * 3);

      for (let j = 0; j < numReplies; j++) {
        comment.replies.push(generateComment(postId));
      }

      comments.push(comment);
    }
  }

  return comments;
};

const commentsData = generateComments();

fs.writeFileSync("comments.json", JSON.stringify(commentsData, null, 2));

console.log("Comments data generated successfully!");
