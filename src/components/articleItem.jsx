const BlogArticleItem = () => {
  return (
    <>
      <div className="blog__item">
        <img className="blog__item-img" src={blogImg1} alt="" />
        <div className="blog__item-info">
          <span className="blog__item-date">August 15, 2020</span> |{" "}
          <a className="blog__item-author" href="">
            by Ann Summers
          </a>{" "}
          |
          <a className="blog__item-theme" href="">
            Bedroom Furniture
          </a>
        </div>
        {/* <Link to="post" className="blog__item-link"> */}
        <Link to="/post" className="blog__item-title">
          Red selfies edison bulb four dollar toast humblebrag for the furniture
        </Link>
        {/* </Link> */}
        <p className="blog__item-text">
          Everyday carry actually neutra authentic kogi shabby chic migas small
          batch craft beer. Literally williamsburg tote bag farm-to-table
          mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug
          selvage hammock palo santo godard thundercats coloring book yuccie
          woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
        </p>
      </div>
    </>
  );
};

export default BlogArticleItem;
