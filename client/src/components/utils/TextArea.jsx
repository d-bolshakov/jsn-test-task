import "./TextArea.styles.css";

const TextArea = (props) => {
  return (
    <div className="textarea-wrapper">
      {props.title && <span className="textarea-title">{props.title}</span>}
      {props.required && <span className="textarea-required">*</span>}
      <textarea {...props} />
    </div>
  );
};

export default TextArea;
