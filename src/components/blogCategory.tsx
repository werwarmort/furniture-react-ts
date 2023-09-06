import { useEffect, useState } from "react";
import { Post } from "../pages/blog";

interface BlogCategoryProps {
  posts: Post[];
}

const BlogCategory: React.FC<BlogCategoryProps> = ({ posts }) => {
  const [categoryCounts, setCategoryCounts] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    // Используем объект для подсчета количества категорий
    const counts: { [key: string]: number } = {};

    posts.forEach((post) => {
      if (counts[post.category]) {
        counts[post.category] += 1;
      } else {
        counts[post.category] = 1;
      }
    });
    setCategoryCounts(counts);
  }, [posts]);

  return (
    <ul className="blog__category-list">
      {Object.entries(categoryCounts).map(([category, count]) => (
        <li className="blog__category-item" key={category}>
          <p className="blog__category-link">
            {category} ({count})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default BlogCategory;
