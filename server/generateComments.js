const fs = require("fs");
const faker = require("faker");
const moment = require("moment");

const NUM_COMMENTS = 400;

const generateComments = () => {
  const comments = [];
  let commentId = 1;

  const generateComment = (postId) => {
    const date = faker.Date.between("2015-01-01", "2023-12-31");
    const comment = {
      postId,
      commentId,
      name: faker.Name.findName(),
      email: faker.Internet.email(),
      date: moment(date).format("MMMM D, YYYY"),
      message: faker.Lorem.words(Math.floor(Math.random() * 35) + 5).join(" "),
      photo: faker.Image.avatar(),
      replies: [],
    };
    commentId++;
    return comment;
  };

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
