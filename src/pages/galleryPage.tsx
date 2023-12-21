import { Link } from "react-router-dom";
import Grid from "../components/flitteringGalley/grid";

const GalleryPage = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <p className="breadcrumbs__link">Gallery</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="gallery">
          <Grid />
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
