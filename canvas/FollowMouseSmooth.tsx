import React, { useCallback, useRef } from "react";
import { InitCanvas, Canvas } from "../components/Canvas";
import { SpringValue, SpringConfig } from "humpf";

export const FollowMouseSmooth: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const canvasInit = useCallback<InitCanvas>((ctx, data) => {
    const xValue = SpringValue({
      ...SpringConfig.static(data.width / 2),
      dampingRatio: 0.3,
    });

    let pointerId: number | null = null;

    const elem = divRef.current;

    if (elem) {
      const moveOrDown = (event: PointerEvent) => {
        event.preventDefault();
        if (pointerId === null) {
          pointerId = event.pointerId;
        }
        if (event.pointerId === pointerId) {
          xValue.replace({
            equilibrium: event.offsetX - 15,
          });
        }
      };

      elem.addEventListener("pointermove", moveOrDown);
      elem.addEventListener("pointerdown", moveOrDown);

      elem.addEventListener("pointerleave", (event) => {
        if (event.pointerId === pointerId) {
          pointerId = null;
        }
      });
    }

    return {
      draw: ({ height, width }) => {
        const ballSize = height * 0.5;
        const x = xValue.position();
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(x, height / 2, ballSize / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "#E53935";
        ctx.fill();
      },
      unmount: () => {
        //
      },
    };
  }, []);

  return (
    <div className="PlayCanvas">
      <Canvas ratio={4} init={canvasInit} containerRef={divRef} />
    </div>
  );
};
