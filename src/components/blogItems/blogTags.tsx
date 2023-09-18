import { Post } from "../../pages/blog";

interface BlogTagsProps {
  posts: Post[];
  tagsClick?: (tag: string) => void;
  tagsToRender: Array<string>;
}

const BlogTags: React.FC<BlogTagsProps> = ({ tagsToRender, tagsClick }) => {
  return (
    <div className="blog__tags">
      <h6 className="blog__tags-title">Tags</h6>
      {tagsToRender.map((tag, i) => (
        <span
          key={i}
          onClick={() => tagsClick && tagsClick(tag)}
          className="blog__tags-link"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default BlogTags;
