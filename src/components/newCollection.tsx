import images from "./BlogImages";

const NewCollection = () => {
  return (
    <div className="container-fluid">
      <h6 className="new-collection__title">Furniture new collection</h6>
      <p className="new-collection__text">
        Deep v you probably haven't heard of them banh mi synth actually
        affogato. Aesthetic lyft ethical drinking vinegar austint
      </p>
      <div className="collection">
        <div className="collection__item">
          <img className="collection__images" src={images.collection1} alt="" />
          <div className="collection__info">
            <div className="collection__info-title">
              Truffaut literally trust
            </div>
            <div className="collection__info-text">
              Living room furntiture | Chair
            </div>
          </div>
        </div>

        <div className="collection__item">
          <img className="collection__images" src={images.collection2} alt="" />
          <div className="collection__info">
            <div className="collection__info-title">
              Truffaut literally trust
            </div>
            <div className="collection__info-text">
              Living room furntiture | Chair
            </div>
          </div>
        </div>

        <div className="collection__item">
          <img className="collection__images" src={images.collection3} alt="" />
          <div className="collection__info">
            <div className="collection__info-title">
              Truffaut literally trust
            </div>
            <div className="collection__info-text">
              Living room furntiture | Chair
            </div>
          </div>
        </div>

        <div className="collection__item">
          <img className="collection__images" src={images.collection4} alt="" />
          <div className="collection__info">
            <div className="collection__info-title">
              Truffaut literally trust
            </div>
            <div className="collection__info-text">
              Living room furntiture | Chair
            </div>
          </div>
        </div>

        <div className="collection__item">
          <img className="collection__images" src={images.collection5} alt="" />
          <div className="collection__info">
            <div className="collection__info-title">
              Truffaut literally trust
            </div>
            <div className="collection__info-text">
              Living room furntiture | Chair
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
