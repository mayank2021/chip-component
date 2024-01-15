import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { listData } from "../Data/ListData";

const ChipContext = createContext();

export const ChipContextProvider = ({ children }) => {
  ChipContextProvider.propTypes = {
    children: PropTypes.element,
  };

  const [chips, setChips] = useState([]);
  const [list, setList] = useState(listData);
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState(null);
  const [highlightItem, sethighlightItem] = useState(false);

  const handleNewChip = (e) => {
    let { value } = e.target;
    if (!value?.trim() && e.key === "Backspace") {
      if (highlightItem) {
        const newItem = chips.filter((_, ind) => ind !== chips?.length - 1);
        setChips(newItem);
        sethighlightItem(false);
        return;
      } else {
        if (chips?.length) sethighlightItem(true);
        return;
      }
    }
    if (e.key !== "Enter") return;
    if (!value?.trim()) return;

    // for unique id we can use uuid but for simplexity i am using random number
    const newEle = {
      id: Math.random(),
      name: value,
    };
    setChips([...chips, newEle]);
    setQuery(null);
    e.target.value = "";
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleShowList = () => setShowList(true);
  const handleListClose = () => setShowList(false);

  const handleListItemClick = (ele) => {
    //add item to the chips
    setChips([...chips, ele]);

    //delete item from list
    const newItem = list.filter((el) => el?.id !== ele?.id);
    setList(newItem);
    setShowList(false);
  };

  const handleChipDelete = (ele) => {
    // delete item from chips
    const newItem = chips.filter((el) => el?.id !== ele?.id);
    setChips(newItem);

    // add item to the list
    setList([...list, ele]);
  };
  return (
    <ChipContext.Provider
      value={{
        chips,
        showList,
        list,
        query,
        handleNewChip,
        handleListItemClick,
        handleSearch,
        handleShowList,
        handleListClose,
        handleChipDelete,
        highlightItem,
      }}
    >
      {children}
    </ChipContext.Provider>
  );
};

export const useChipContext = () => useContext(ChipContext);
