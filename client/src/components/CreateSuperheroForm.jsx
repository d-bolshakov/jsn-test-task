import { useState } from "react";
import Input from "../components/utils/Input";
import "./CreateSuperheroForm.styles.css";
import TextArea from "../components/utils/TextArea";
import FileSelector from "../components/utils/FileSelector";
import Button from "../components/utils/Button";
import { BUTTON_STYLES, BUTTON_TYPES } from "../common/buttons";
import { useDispatch } from "react-redux";
import { createSuperhero } from "../store/superhero/superheroThunks";
import { useNavigate } from "react-router-dom";
import ImageCard from "../components/utils/ImageCard";

const CreateSuperheroForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [images, setImages] = useState([]);

  const canCreate = () =>
    nickname &&
    realName &&
    originDescription &&
    superpowers &&
    catchPhrase &&
    images.length &&
    true;

  const saveSuperhero = () => {
    const data = new FormData();
    data.append("nickname", nickname);
    data.append("real_name", realName);
    data.append("origin_description", originDescription);
    data.append("superpowers", superpowers);
    data.append("catch_phrase", catchPhrase);
    images.map((image) => data.append(image.name, image));
    dispatch(createSuperhero(data));
    navigate("/");
  };

  const imagesLayout = images
    ? images.map((image, index) => (
        <ImageCard
          key={index}
          src={URL.createObjectURL(image)}
          onClick={() =>
            setImages(images.filter((img) => img !== images[index]))
          }
          text="&times;"
        />
      ))
    : "";
  return (
    <div className="create-superhero-form">
      <h1>CREATE A NEW SUPERHERO</h1>
      <div className="create-superhero-info">
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          title="Nickname:"
        />
        <Input
          type="text"
          value={realName}
          onChange={(e) => setRealName(e.target.value)}
          required
          title="Real name:"
        />
        <TextArea
          value={originDescription}
          onChange={(e) => setOriginDescription(e.target.value)}
          required
          title="Origin description:"
        />
        <TextArea
          value={superpowers}
          onChange={(e) => setSuperpowers(e.target.value)}
          required
          title="Superpowers:"
        />
        <Input
          type="text"
          value={catchPhrase}
          onChange={(e) => setCatchPhrase(e.target.value)}
          required
          title="Catch phrase:"
        />
      </div>
      <div className="create-superhero-images">
        <FileSelector text="SELECT IMAGES" setFiles={setImages} />
        <div className="create-superhero-images-container">{imagesLayout}</div>
      </div>
      <Button
        style={BUTTON_STYLES.PRIMARY}
        type={BUTTON_TYPES.ON_CLICK}
        text="CREATE"
        canUse={canCreate}
        onClick={saveSuperhero}
      />
    </div>
  );
};

export default CreateSuperheroForm;
