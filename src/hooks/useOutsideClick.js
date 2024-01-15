import { useEffect, useRef } from "react";

const useOutsideClick = (handler, listenInCapturingPhase = true) => {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    window.addEventListener("click", handleClick, listenInCapturingPhase);

    () =>
      window.removeEventListener("click", handleClick, listenInCapturingPhase);
  }, [handler, listenInCapturingPhase]);
  return ref;
};

export default useOutsideClick;
