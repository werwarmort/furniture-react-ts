const fs = require("fs");
const faker = require("../node_modules/Faker/Faker");
const moment = require("moment");

const generatePosts = (count) => {
  const posts = [];

  for (let i = 1; i <= count; i++) {
    const postId = i;
    const date = faker.Date.between(2015, 2023); // Генерация случайной даты в прошлом
    const author = faker.Name.findName();
    const title = faker.Lorem.sentence();
    const previewType = faker.random.array_element(["img", "slider", "video"]);
    let previewLink;

    if (previewType === "img" || previewType === "slider") {
      previewLink = faker.Image.imageUrl();
    } else if (previewType === "video") {
      previewLink = faker.Lorem.sentence(1, 3);
    }

    const body = faker.Lorem.paragraphs(10); // Генерация случайного текста параграфами

    posts.push({
      postId: postId,
      date: moment(date).format("MMMM D, YYYY"), // Форматирование даты
      author: `by ${author}`,
      title: title,
      preview: { type: previewType, link: previewLink },
      body: body,
    });
  }

  return posts;
};

const posts = generatePosts(100); // Генерируем 100 постов

fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
