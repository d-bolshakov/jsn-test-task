import { Link } from "react-router-dom";
import { URLS } from "../common/urls";
import "./SuperheroCard.styles.css";

const SuperheroCard = (props) => {
  return (
    <div className="superhero-card-wrapper">
      <Link to={`/superhero/${props.superhero.id}`}>
        <div className="superhero-card">
          <div className="superhero-card-image-wrapper">
            <img
              className="superhero-card-image"
              src={URLS.IMAGES + props.superhero.images[0].image}
              alt={props.superhero.nickname}
            />
          </div>
          <div className="superhero-card-nickname-wrapper">
            <span className="superhero-card-nickname">
              {props.superhero.nickname}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SuperheroCard;
