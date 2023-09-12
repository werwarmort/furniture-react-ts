import images from "../BlogImages";

const SocialLinks = () => {
  return (
    <ul className="blog__social">
      <li className="blog__social-item">
        <a href="#" className="contact__social-link">
          <img
            src={images.facebook}
            alt=""
            className="contact__social-link-img"
          />
        </a>
      </li>
      <li className="blog__social-item">
        <a href="#" className="contact__social-link">
          <img
            src={images.instagram}
            alt=""
            className="contact__social-link-img"
          />
        </a>
      </li>
      <li className="blog__social-item">
        <a href="#" className="contact__social-link">
          <img
            src={images.pinterest}
            alt=""
            className="contact__social-link-img"
          />
        </a>
      </li>
      <li className="blog__social-item">
        <a href="#" className="contact__social-link">
          <img
            src={images.whatsapp}
            alt=""
            className="contact__social-link-img"
          />
        </a>
      </li>
      <li className="blog__social-item">
        <a href="#" className="contact__social-link">
          <img
            src={images.youtube}
            alt=""
            className="contact__social-link-img"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
