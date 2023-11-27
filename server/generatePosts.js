const fs = require("fs");
const faker = require("../node_modules/Faker/Faker");
const moment = require("moment");

const tags = [
  "Office Furniture",
  "Bedroom",
  "Table",
  "Chair",
  "Dining room futniture",
];

const getRandomTags = () => {
  const numberOfTags = faker.random.number({ min: 1, max: 3 }); // Генерируем от 1 до 3 тегов
  const selectedTags = faker.random.array_element(tags, numberOfTags);
  return selectedTags;
};

const generatePosts = (count) => {
  const posts = [];

  for (let i = 1; i <= count; i++) {
    const category = faker.random.array_element([
      "Bedroom Furniture",
      "Design",
      "Table Furniture",
      "Living room furniture",
      "Landscape design",
      "Restroom furniture",
    ]);
    const postId = i;
    const date = faker.Date.between(2015, 2023);
    const author = faker.Name.findName();
    const title = faker.Lorem.sentence();
    const previewType = faker.random.array_element(["img", "slider", "video"]);
    let previewLink;

    if (
      previewType === "img" ||
      previewType === "slider" ||
      previewType === "video"
    ) {
      previewLink = faker.random.array_element([
        "blogImg1",
        "blogImg3",
        "blogImg2",
        "img4",
        "img5",
        "img6",
        "img7",
        "img8",
        "img9",
        "img10",
        "img11",
        "img12",
        "img13",
        "img14",
        "img15",
        "img16",
        "img17",
        "img18",
        "img19",
        "img20",
        "img21",
        "img22",
        "img23",
        "img24",
        "img25",
        "img26",
        "img27",
      ]);
    }

    let videoLink;
    if (previewType === "video") {
      videoLink = "https://www.youtube.com/embed/4UZrsTqkcW4";
    }

    const body = faker.Lorem.paragraphs(10);
    const mainBody = faker.Lorem.paragraphs(25);

    const postTags = getRandomTags(); // Генерируем теги для поста

    if (previewType === "video") {
      posts.push({
        category: category,
        postId: postId,
        date: moment(date).format("MMMM D, YYYY"),
        author: `by ${author}`,
        title: title,
        preview: { type: previewType, link: previewLink, videoLink: videoLink },
        body: body,
        tags: postTags, // Добавляем теги в пост
      });
    } else if (previewType === "img" || previewType === "slider") {
      posts.push({
        category: category,
        postId: postId,
        date: moment(date).format("MMMM D, YYYY"),
        author: `by ${author}`,
        title: title,
        preview: { type: previewType, link: previewLink },
        body: body,
        mainBody: mainBody,
        tags: postTags, // Добавляем теги в пост
      });
    }
  }

  return posts;
};

const posts = generatePosts(100);

fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
