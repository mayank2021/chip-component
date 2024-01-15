import useFirstLetter from "../../hooks/useFirstLetter";
import "./Chip.css";
import PropTypes from "prop-types";

const Chip = ({ text, onRemove, highlight }) => {
  Chip.propTypes = {
    text: PropTypes.string,
    onRemove: PropTypes.func,
    highlight: PropTypes.bool,
  };
  const firstLetter = useFirstLetter(text);
  return (
    <div className={`chip ${highlight ? "hightlight-chip" : ""}`}>
      <div className="chip-icon">{firstLetter}</div>
      <span>{text}</span>
      <button type="button" className="chip-remove" onClick={onRemove}></button>
    </div>
  );
};

export default Chip;
