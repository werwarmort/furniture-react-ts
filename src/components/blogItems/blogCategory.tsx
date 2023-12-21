import { useEffect, useState } from "react";
import { Post } from "../../pages/blogPage";

interface BlogCategoryProps {
  posts: Post[];
  categoryClick?: (category: string) => void;
}

const BlogCategory: React.FC<BlogCategoryProps> = ({
  posts,
  categoryClick,
}) => {
  const [categoryCounts, setCategoryCounts] = useState<{
    [key: string]: number;
  }>({});
  useEffect(() => {
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

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (categoryClick) {
      if (activeCategory === category) {
        setActiveCategory(null);
      } else {
        setActiveCategory(category);
      }
      categoryClick(category);
    }
  };

  return (
    <ul className="blog__category-list">
      {Object.entries(categoryCounts).map(([category, count]) => (
        <li className="blog__category-item" key={category}>
          <p
            className={`blog__category-link${
              activeCategory === category ? "--active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category} ({count})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default BlogCategory;
