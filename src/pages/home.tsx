import images from "../components/BlogImages";
import BlogBox from "../components/blogBox";

import Grid from "../components/flitteringGalley/grid";
import NewCollection from "../components/newCollection";
import CustomSlider from "../components/slider";

const HomePage = () => {
  return (
    <main className="main">
      <div className="top">
        <CustomSlider />
      </div>

      <section className="new-collection">
        <NewCollection />
      </section>

      <section className="decor">
        <div className="container">
          <h2 className="decor__title">Aesthetic ethical drinking</h2>
          <p className="decor__text">
            Deep v you probably haven't heard of them banh mi synth actually
            affogato. Artlyft ethical the one drinking vinegar austint
          </p>
        </div>
      </section>

      <section className="works-path">
        <div className="container">
          <h3 className="works-path__title">how it works</h3>
          <div className="works-path__items">
            <div className="works-path__items-box">
              <div className="works-path__item  works-path__item--consultation">
                <img
                  className="works-path__item-img"
                  src={images.graphicTool}
                  alt=""
                />
                <h6 className="works-path__item-title">
                  Designer Consultation
                </h6>
                <p className="works-path__item-text">
                  Kinfolk scenester authentic craft beer truffaut irony
                  intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                  bun venmo viral cliche
                </p>
              </div>
              <div className="works-path__item works-path__item--producton">
                <img
                  className="works-path__item-img"
                  src={images.sofa}
                  alt=""
                />
                <h6 className="works-path__item-title">Production</h6>
                <p className="works-path__item-text">
                  Intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                  bun venmo viral cliche
                </p>
              </div>
            </div>
            <div className="works-path__item  works-path__item--measurements">
              <img
                className="works-path__item-img"
                src={images.mesuringTape}
                alt=""
              />
              <h6 className="works-path__item-title">Measurements</h6>
              <p className="works-path__item-text">
                Everyday carry actually neutra authentic kogi shabby chic
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery">
        <Grid />
      </div>

      <section className="blog-box">
        <div className="container">
          <BlogBox />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
