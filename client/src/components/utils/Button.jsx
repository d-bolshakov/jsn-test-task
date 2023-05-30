import { Link } from "react-router-dom";
import "./Button.styles.css";
import { BUTTON_TYPES } from "../../common/buttons";

const Button = (props) => {
  const { style, type, text, onClick, canUse, disabled = false, to } = props;

  const isAvailable = canUse ? canUse() : true;

  let button;
  const status = !isAvailable || disabled ? "disabled" : "";

  switch (type) {
    case BUTTON_TYPES.ON_CLICK:
      button = (
        <div
          className={`button-${type} button-${style} button ${status}`}
          onClick={
            onClick && status !== "disabled"
              ? onClick
              : () => {
                  return;
                }
          }
        >
          {text}
        </div>
      );
      break;
    case BUTTON_TYPES.LINK:
      button = (
        <Link
          to={to}
          className="button-link-wrapper"
          onClick={
            status === "disabled"
              ? (e) => e.preventDefault()
              : () => {
                  return;
                }
          }
        >
          <div className={`button-${type} button-${style} button ${status}`}>
            {text}
          </div>
        </Link>
      );
      break;
  }

  return <div className="button-wrapper">{button}</div>;
};

export default Button;
