import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { fetchSuperheros } from "../store/superhero/superheroThunks";
import SuperheroCard from "./SuperheroCard";
import "./SuperherosList.styles.css";
import Button from "./utils/Button";
import { BUTTON_STYLES, BUTTON_TYPES } from "../common/buttons";
import Pagination from "./utils/Pagination";

const SuperherosList = () => {
  const dispatch = useDispatch();
  let { page = 1 } = useParams();
  page = Number(page);
  useEffect(() => {
    dispatch(fetchSuperheros(page));
  }, [dispatch, page]);

  const superheros = useSelector((state) => state.superhero.superheros);
  const isLoading = useSelector((state) => state.superhero.isLoading);
  const error = useSelector((state) => state.superhero.error);
  const isMoreAvailable = useSelector(
    (state) => state.superhero.isMoreAvailable
  );

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
  else
    content = (
      <div className="superheros-list">
        <Button
          text="CREATE A NEW SUPERHERO"
          style={BUTTON_STYLES.SECONDARY}
          type={BUTTON_TYPES.LINK}
          to={"/create"}
        />
        {superheros.map((superhero) => (
          <SuperheroCard key={superhero.id} superhero={superhero} />
        ))}
        <div className="pagination-block">
          <Pagination isMoreAvailable={isMoreAvailable} page={page} path="/" />
        </div>
      </div>
    );

  return <div className="superheros-list-wrapper">{content}</div>;
};

export default SuperherosList;
