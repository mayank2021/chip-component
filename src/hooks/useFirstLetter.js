const useFirstLetter = (text) => {
  let firstLetter = text?.slice(0, 1)?.toUpperCase();
  return firstLetter;
};

export default useFirstLetter;
