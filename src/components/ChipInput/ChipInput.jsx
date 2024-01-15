import "./ChipInput.css";
import Chip from "../Chip/Chip";
import List from "../List/List";
import useOutsideClick from "../../hooks/useOutsideClick";
import useSearchedList from "../../hooks/useSearchedList";
import { useChipContext } from "../../context/ChipContext";

const ChipInput = () => {
  const {
    chips,
    showList,
    list,
    query,
    handleNewChip,
    handleSearch,
    handleShowList,
    handleListClose,
    handleChipDelete,
    highlightItem,
  } = useChipContext();

  const searchedList = useSearchedList(query, list);
  const ref = useOutsideClick(handleListClose);

  const selectedList = query ? searchedList : list;
  return (
    <div className="chip__input--container">
      {chips?.map((ele, ind) => (
        <Chip
          key={ele?.id}
          text={ele?.name}
          highlight={highlightItem && ind === chips.length - 1}
          onRemove={() => handleChipDelete(ele)}
        />
      ))}
      <div className="chip__input">
        <input
          ref={ref}
          autoFocus
          type="text"
          placeholder="Type Something..."
          onKeyDown={handleNewChip}
          onChange={handleSearch}
          onClick={handleShowList}
        />
        {showList && selectedList?.length ? (
          <List reference={ref} data={selectedList} />
        ) : null}
      </div>
    </div>
  );
};

export default ChipInput;
