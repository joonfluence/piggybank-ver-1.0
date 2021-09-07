import { useCallback, useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: useCallback((event) => {
        setValue(event.target.value);
      }, []),
    },
  };
};

export default useInput;
