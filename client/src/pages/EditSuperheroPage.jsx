import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuperheroById } from "../store/superhero/superheroThunks";
import { useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import EditSuperheroForm from "../components/EditSuperheroForm";
import "./EditSuperheroPage.styles.css";

const EditSuperheroPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoading = useSelector((state) => state.superhero.isLoading);
  const error = useSelector((state) => state.superhero.error);
  const superhero = useSelector((state) => state.superhero.currentSuperhero);

  useEffect(() => {
    dispatch(fetchSuperheroById(id));
  }, [dispatch]);

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
  else if (error) {
  } else if (superhero) {
    content = <EditSuperheroForm superhero={superhero} />;
  }

  return <div className="edit-superhero-form-wrapper">{content}</div>;
};

export default EditSuperheroPage;
