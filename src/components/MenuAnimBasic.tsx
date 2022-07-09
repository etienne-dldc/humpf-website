import { useEffect, useRef, useState } from "react";
import { getSize, useElementSize } from "../hooks/useElementSize";
import { MenuIcon } from "./MenuIcon";
import { XIcon } from "./XIcon";
import { SpringSequence } from "humpf";
import { cp } from "fs/promises";

export const MenuAnimBasic = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const width = useElementSize(divRef).width;
  const [visible, setVisible] = useState(false);

  const height = 200;
  const menuWidth = width * 0.3;

  const hiddenTranslate = -(menuWidth + 30);

  const rafRef = useRef<number | null>(null);
  const springSeqRef = useRef<SpringSequence>();

  useEffect(() => {
    const width = getSize(divRef.current).width;
    const menuWidth = width * 0.3;
    const hiddenTranslate = -(menuWidth + 30);
    if (menuRef.current) {
      menuRef.current.style.transform = `translate(${hiddenTranslate}px)`;
    }

    const springSeq = SpringSequence.create(
      { initial: { position: hiddenTranslate } }
      // {
      //   onSpringChange: () => {
      //     render();
      //   },
      // }
    );
    springSeqRef.current = springSeq;
    const render = () => {
      // if (springValue.stable()) {
      //   rafRef.current = null;
      //   return;
      // }
      if (menuRef.current) {
        menuRef.current.style.transform = `translate(${springSeq.spring.position(
          Date.now()
        )}px)`;
        rafRef.current = window.requestAnimationFrame(render);
      }
    };
    // start
    render();
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="PlayCanvas">
      <div
        style={{ height, position: "relative", userSelect: "none" }}
        ref={divRef}
        className="Canvas"
      >
        <div
          ref={menuRef}
          style={{
            width: menuWidth,
            position: "absolute",
            borderRadius: 6,
            bottom: 20,
            top: 20,
            left: 20,
            background: "#CFD8DC",
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
          onClick={() => {
            setVisible((p) => !p);
            if (springSeqRef.current) {
              springSeqRef.current.replaceAll(
                Date.now(),
                visible
                  ? { position: 0, equilibrium: hiddenTranslate, velocity: 0 }
                  : { position: hiddenTranslate, equilibrium: 0, velocity: 0 }
              );
            }
          }}
        >
          {visible ? <XIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};
