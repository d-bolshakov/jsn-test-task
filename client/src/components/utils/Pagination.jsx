import { useParams } from "react-router-dom";
import { BUTTON_STYLES, BUTTON_TYPES } from "../../common/buttons";
import Button from "./Button";
import "./Pagination.styles.css";

const Pagination = (props) => {
  let { page, path, isMoreAvailable } = props;

  const canGoNext = () => isMoreAvailable;
  const canGoPrev = () => page > 1;
  return (
    <div className="pagination">
      <div className="pagination-button">
        <Button
          type={BUTTON_TYPES.LINK}
          style={BUTTON_STYLES.SECONDARY}
          text={"<"}
          canUse={canGoPrev}
          to={`${path}${page - 1}`}
        />
      </div>
      <div className="pagination-button">
        <Button
          type={BUTTON_TYPES.LINK}
          style={BUTTON_STYLES.SECONDARY}
          text={">"}
          canUse={canGoNext}
          to={`${path}${page + 1}`}
        />
      </div>
    </div>
  );
};

export default Pagination;
