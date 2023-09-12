import { useNavigate } from "react-router-dom";
import { Post } from "../pages/blog";

export interface CustomLinkProps {
  to: string;
  post: Post;
  children: React.ReactNode;
  posts?: Array<Post>;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  to,
  post,
  children,
  posts,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to, { state: { post, posts } });
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default CustomLink;
