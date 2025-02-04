import React, { createContext, useState } from "react";

interface ContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  countHandleSubmit: (hint: string) => void;
}

export const ContextProvider = createContext<ContextType>({
  count: 10,
  setCount: () => {},
  countHandleSubmit: () => {},
});

import { ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export default function Context({
  children,
}: ContextProps): React.ReactElement {
  const [count, setCount] = useState(10);
  const countHandleSubmit = (hint: string) => {
    switch (true) {
      case hint === "inc":
        setCount(count + 1);
        break;
      case hint === "dec" && count > 0:
        setCount(count - 1);
        break;
    }
  };
  const data = { count, setCount, countHandleSubmit };
  return (
    <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
  );
}
