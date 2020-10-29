import React, { useRef, useState } from "react";
import { useElementSize } from "../hooks/useElementSize";
import { MenuIcon } from "./MenuIcon";
import { XIcon } from "./XIcon";

export const MenuNoAnim: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const width = useElementSize(divRef).width;
  const [visible, setVisible] = useState(false);

  const height = 200;
  const menuWidth = width * 0.3;

  return (
    <div className="PlayCanvas">
      <div
        style={{ height, position: "relative", userSelect: "none" }}
        ref={divRef}
        className="Canvas"
      >
        <div
          style={{
            width: menuWidth,
            position: "absolute",
            borderRadius: 6,
            bottom: 20,
            top: 20,
            left: 20,
            background: "#CFD8DC",
            transform: visible
              ? "translateX(0)"
              : `translateX(-${menuWidth + 30}px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            cursor: "pointer",
            color: "#3F51B5",
          }}
          onClick={() => setVisible((p) => !p)}
        >
          {visible ? <XIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};
