import "./Input.styles.css";

const Input = (props) => {
  return (
    <div className="input-wrapper">
      {props.title && <span className="input-title">{props.title}</span>}
      {props.required && <span className="input-required">*</span>}
      <input {...props} />
    </div>
  );
};

export default Input;
