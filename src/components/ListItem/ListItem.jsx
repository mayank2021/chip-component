import useFirstLetter from "../../hooks/useFirstLetter";
import "./ListItem.css";
import PropTypes from "prop-types";

const ListItem = ({ text, onClick }) => {
  ListItem.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  };

  let firstLetter = useFirstLetter(text);
  return (
    <div className="list" onClick={onClick}>
      <div className="list-icon">{firstLetter}</div>
      <span>{text}</span>
    </div>
  );
};

export default ListItem;
