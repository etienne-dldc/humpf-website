import { useContext } from "react";
import { useState, createContext } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

const DEFAULT_SIZE: Size = { width: 1024, height: 700 };

const WindowSizeContext = createContext<Size>(DEFAULT_SIZE);

interface Size {
  width: number;
  height: number;
}

function getSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

type Props = {
  children?: React.ReactNode;
};

export const WindowSizeProvider = ({ children }: Props) => {
  const [windowSize, setWindowSize] = useState<Size>(DEFAULT_SIZE);

  useIsomorphicLayoutEffect(() => {
    setWindowSize(getSize());
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export function useWindowSize(): Size {
  return useContext(WindowSizeContext);
}
