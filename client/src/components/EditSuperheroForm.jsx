import { useState } from "react";
import Input from "./utils/Input";
import "./EditSuperheroForm.styles.css";
import TextArea from "./utils/TextArea";
import FileSelector from "./utils/FileSelector";
import Button from "./utils/Button";
import { BUTTON_STYLES, BUTTON_TYPES } from "../common/buttons";
import { useDispatch } from "react-redux";
import { editSuperhero } from "../store/superhero/superheroThunks";
import ImageCard from "./utils/ImageCard";
import { URLS } from "../common/urls";
import { useNavigate } from "react-router-dom";

const EditSuperheroForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { superhero } = props;
  const [nickname, setNickname] = useState(superhero.nickname);
  const [real_name, setRealName] = useState(superhero.real_name);
  const [origin_description, setOriginDescription] = useState(
    superhero.origin_description
  );
  const [superpowers, setSuperpowers] = useState(superhero.superpowers);
  const [catch_phrase, setCatchPhrase] = useState(superhero.catch_phrase);
  const [images, setImages] = useState(superhero.images);
  const [newImages, setNewImages] = useState([]);

  const fields = [
    { nickname },
    { real_name },
    { origin_description },
    { superpowers },
    { catch_phrase },
  ];

  const changedFields = () => {
    const res = [];
    fields.map((field) => {
      if (Object.values(field)[0] !== superhero[Object.keys(field)[0]])
        res.push(field);
    });
    return res;
  };

  const deletedImages = () => {
    return superhero.images.filter(
      (image) => !images.find((img) => img.id === image.id)
    );
  };

  const saveChanges = () => {
    const data = new FormData();
    const changes = changedFields();
    changes.map((change) => {
      data.append(Object.keys(change)[0], Object.values(change)[0]);
    });
    if (newImages.length)
      newImages.map((image) => data.append(image.name, image));
    deletedImages().map((image) => data.append("deleted_images", image.id));
    dispatch(
      editSuperhero({
        id: superhero.id,
        superhero: data,
      })
    );
    navigate(`/superhero/${superhero.id}`);
  };

  const existingImagesLayout = images.map((image) => (
    <ImageCard
      key={image.id}
      src={URLS.IMAGES + image.image}
      onClick={() => {
        if (images.length + newImages.length > 1) {
          setImages(images.filter((img) => img !== image));
        }
      }}
      text="&times;"
    />
  ));

  const newImagesLayout = newImages
    ? newImages.map((image, index) => (
        <ImageCard
          key={index}
          src={URL.createObjectURL(image)}
          onClick={() => {
            console.log("images length", images.length);
            console.log("newImages length", newImages.length);
            if (images.length + newImages.length > 1) {
              setNewImages(newImages.filter((img) => img !== image));
            }
          }}
          text="&times;"
        />
      ))
    : "";
  return (
    <div className="edit-superhero-form">
      <h1>EDIT {superhero.nickname}</h1>
      <div className="edit-superhero-info">
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          title="Nickname:"
        />
        <Input
          type="text"
          value={real_name}
          onChange={(e) => setRealName(e.target.value)}
          required
          title="Real name:"
        />
        <TextArea
          value={origin_description}
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
          value={catch_phrase}
          onChange={(e) => setCatchPhrase(e.target.value)}
          required
          title="Catch phrase:"
        />
      </div>
      <div className="edit-superhero-images">
        <FileSelector text="SELECT IMAGES" setFiles={setNewImages} />
        <div className="edit-superhero-images-container">
          {existingImagesLayout}
          {newImagesLayout}
        </div>
      </div>
      <Button
        style={BUTTON_STYLES.PRIMARY}
        type={BUTTON_TYPES.ON_CLICK}
        text="SAVE CHANGES"
        onClick={saveChanges}
        canUse={() => {
          return (
            (changedFields().length ||
              deletedImages().length ||
              newImages.length) &&
            newImages.length + images.length > 0
          );
        }}
      />
    </div>
  );
};

export default EditSuperheroForm;
