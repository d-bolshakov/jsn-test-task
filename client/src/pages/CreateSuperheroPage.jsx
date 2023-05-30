import "./CreateSuperheroPage.styles.css";
import CreateSuperheroForm from "../components/CreateSuperheroForm";
import { useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";

const CreateSuperheroPage = () => {
  const isLoading = useSelector((state) => state.superhero.isLoading);
  const error = useSelector((state) => state.superhero.error);

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
  } else {
    content = <CreateSuperheroForm />;
  }

  return <div className="edit-superhero-form-wrapper">{content}</div>;
};

export default CreateSuperheroPage;
