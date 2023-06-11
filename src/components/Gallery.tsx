import "./Gallery.css";

const Gallery = () => {
  const numberOfImages = 14;
  const imgUrls: string[] = [];
  for (let i = 1; i <= numberOfImages; i++) {
    imgUrls.push(`/images/${i}.jpeg`);
  }
  return (
    <section className="section grey">
      <div className="section-container">
        <div className="section-layout-container collumn-layout">
          <div className="gallery-wrapper">
            <h1 className="section-title">Galerie</h1>
            <div className="images-wrapper">
              {imgUrls.map((imgUrl, index) => {
                return <GalleryImage imgUrl={imgUrl} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Props {
  imgUrl: string;
}

function GalleryImage({ imgUrl }: Props) {
  return (
    <div className="image-wrapper">
      <img src={imgUrl} alt="gallery-image" className="image" />
    </div>
  );
}

export default Gallery;
