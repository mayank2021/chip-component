import "./List.css";
import ListItem from "../ListItem/ListItem";
import PropTypes from "prop-types";
import { useChipContext } from "../../context/ChipContext";

const List = ({ data, reference }) => {
  List.propTypes = {
    data: PropTypes.array,
    reference: PropTypes.ref,
  };

  const { handleListItemClick } = useChipContext();
  return (
    <div className="list-conatiner" ref={reference}>
      {data?.map((ele) => (
        <ListItem
          key={ele.id}
          text={ele.name}
          onClick={() => handleListItemClick(ele)}
        />
      ))}
    </div>
  );
};

export default List;
