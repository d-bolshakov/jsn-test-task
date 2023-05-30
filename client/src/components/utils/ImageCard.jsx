import "./ImageCard.styles.css";

const ImageCard = (props) => {
  const { src, alt = "", text, onClick } = props;
  return (
    <div className="image-card-wrapper">
      <img className="image-card-image" src={src} alt={alt} />
      <div className="image-card-overlay" onClick={onClick}>
        <div className="image-card-text">{text}</div>
      </div>
    </div>
  );
};

export default ImageCard;
