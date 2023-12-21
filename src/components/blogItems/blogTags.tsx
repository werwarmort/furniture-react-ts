import { Post } from "../../pages/blogPage";

interface BlogTagsProps {
  posts: Post[];
  tagsClick?: (tag: string) => void;
  tagsToRender: Array<string>;
  activeTags: Array<string>;
}

const BlogTags: React.FC<BlogTagsProps> = ({
  tagsToRender,
  tagsClick,
  activeTags,
}) => {
  return (
    <div className="blog__tags">
      <h6 className="blog__tags-title">Tags</h6>
      {tagsToRender.map((tag, i) => (
        <span
          key={i}
          onClick={() => tagsClick && tagsClick(tag)}
          className={
            activeTags.includes(tag)
              ? "blog__tags-link--active"
              : "blog__tags-link"
          }
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default BlogTags;
