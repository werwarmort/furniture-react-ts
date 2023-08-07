const fs = require("fs");
// import * as faker from "Faker";
const faker = require("../node_modules/Faker/Faker");

const generateComments = (count) => {
  const comments = [];

  for (let i = 1; i <= count; i++) {
    const postId = Math.floor(Math.random() * 100) + 1; // Генерация случайного postId
    comments.push({
      postId: postId,
      id: 0 + i,
      name: faker.Name.findName(), // Генерация случайного имени
      email: faker.Internet.email(),
      body: faker.Lorem.sentence(3, 20),
    });
  }

  return comments;
};

const comments = generateComments(100); // Замените 4 на нужное количество комментариев

fs.writeFileSync("comments.json", JSON.stringify(comments, null, 2));
