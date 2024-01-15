import { useEffect, useState } from "react";

const useSearchedList = (query, searchInData) => {
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    if (query) {
      let newList = searchInData?.filter((ele) =>
        ele?.name?.toLowerCase()?.includes(query?.toLowerCase())
      );
      setSearchedList(newList);
    }
  }, [query, searchInData]);

  return searchedList;
};

export default useSearchedList;
