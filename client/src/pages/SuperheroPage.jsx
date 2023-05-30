import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSuperheroById } from "../store/superhero/superheroThunks";
import Button from "../components/utils/Button";
import { BUTTON_STYLES, BUTTON_TYPES } from "../common/buttons";
import { BallTriangle } from "react-loader-spinner";
import "./SuperheroPage.styles.css";
import { removeSuperhero } from "../store/superhero/superheroThunks";
import { URLS } from "../common/urls";

const SuperheroPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSuperheroById(id));
  }, [dispatch]);

  const superhero = useSelector((state) => state.superhero.currentSuperhero);
  const isLoading = useSelector((state) => state.superhero.isLoading);
  const error = useSelector((state) => state.superhero.error);
  const message = useSelector((state) => state.superhero.message);

  let content;

  if (isLoading)
    content = (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#a52a2a"
        ariaLabel="ball-triangle-loading"
        wrapperClass={"loader-wrapper"}
        wrapperStyle=""
        visible={true}
      />
    );
  else if (error) content = <p>error</p>;
  else if (superhero)
    content = (
      <div className="superhero-container">
        <div className="superhero-info">
          <h1 id="nickname">{superhero.nickname}</h1>
          <br />
          <span id="real-name">
            <span className="label">Real name: </span>
            <span>{superhero.real_name}</span>
          </span>
          <br />
          <span id="origin_description">
            <span className="label">Origin description: </span>
            <span>{superhero.origin_description}</span>
          </span>
          <br />
          <span id="superpowers">
            <span className="label"> Superpowers: </span>
            <span>{superhero.superpowers}</span>
          </span>
          <br />
          <span id="catch_phrase">
            <span className="label">Catch phrase: </span>
            <span>{superhero.catch_phrase}</span>
          </span>
          <br />
        </div>
        <div className="superhero-images-container">
          {superhero.images.map((image) => (
            <div key={image.id} className="superhero-image-wrapper">
              <img
                className="superhero-image"
                src={URLS.IMAGES + image.image}
                alt={superhero.nickname}
              />
            </div>
          ))}
        </div>
        <div className="superhero-controls">
          <div className="superhero-controls-item">
            <Button
              text="EDIT"
              style={BUTTON_STYLES.SECONDARY}
              type={BUTTON_TYPES.LINK}
              to={`/superhero/${id}/edit`}
            />
          </div>
          <div className="superhero-controls-item">
            <Button
              text="REMOVE"
              style={BUTTON_STYLES.PRIMARY}
              type={BUTTON_TYPES.ON_CLICK}
              onClick={() => {
                dispatch(removeSuperhero(id));
                if (message) alert(message);
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="superhero-wrapper">{content}</div>
    </div>
  );
};

export default SuperheroPage;
