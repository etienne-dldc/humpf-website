import React, { useCallback } from "react";
import { PlayCanvas, InitPlayCanvas } from "./PlayCanvas";
import { Curve, CurvePoint, map, horizontalLine, withContext } from "../utils";

interface Props {
  position: (x: number) => number;
  loop?: boolean;
  duration?: number;
  ratio?: number;
  yMin?: number;
  yMax?: number;
  restartOnChange?: boolean;
  restartOnChangeDebounce?: number | false;
  autoStart?: boolean;
  autoStartDelay?: number;
  previewTime?: number;
  equilibrium?: number;
}

export const CurveCanvas: React.FC<Props> = ({
  position,
  loop,
  duration = 1000,
  yMin = 100,
  yMax = -100,
  restartOnChange,
  restartOnChangeDebounce,
  autoStart,
  autoStartDelay,
  previewTime,
  ratio,
  equilibrium,
}) => {
  const init = useCallback<InitPlayCanvas>(
    (ctx) => {
      const curve = Curve(ctx, position, {
        xMax: duration,
        yMax,
        yMin,
      });

      const point = CurvePoint(position, {
        xMax: duration,
        yMax,
        yMin,
      });

      return {
        draw: ({ width, height, ts, done, isDone }) => {
          if (!isDone && ts > duration) {
            done();
          }

          ctx.clearRect(0, 0, width, height);
          ctx.fillStyle = "#352730";
          ctx.fillRect(0, 0, width, height);

          const padding = height * 0.1;
          const graphWidth = width - padding * 2;
          const graphHeight = height - padding * 2;

          const ballWidth = graphWidth * 0.2;
          const curveWidth = graphWidth - ballWidth;

          const ballOffset = ballWidth / 2;
          const ballRadius = width * 0.03;

          const equilValue = equilibrium ?? position(1000000);
          const l1y = map(yMin, yMax, 0, graphHeight, equilValue);
          const l2y = map(yMin, yMax, 0, graphHeight, position(0));

          withContext(ctx, () => {
            ctx.translate(padding, padding);

            withContext(ctx, () => {
              ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
              ctx.lineWidth = 1;
              ctx.setLineDash([5, 10]);
              horizontalLine(ctx, 0, graphWidth, l1y);
              horizontalLine(ctx, 0, graphWidth, l2y);
            });

            const ballPos = point(0, graphHeight, ts);
            const pointPos = point(curveWidth, graphHeight, ts);

            const minDist = Math.abs(ballPos.y - l1y);
            const maxDist = Math.abs(ballPos.y - l2y);

            const lineOpacity =
              minDist < 10 ? minDist / 10 : maxDist < 10 ? maxDist / 10 : 1;

            withContext(ctx, () => {
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity * 0.4})`;
              ctx.lineWidth = 1;
              horizontalLine(
                ctx,
                ballOffset + ballPos.x,
                ballWidth + pointPos.x,
                ballPos.y
              );
            });

            withContext(ctx, () => {
              ctx.beginPath();
              ctx.arc(ballOffset, ballPos.y, ballRadius, 0, 2 * Math.PI);
              ctx.fillStyle = "#E53935";
              ctx.fill();
            });

            withContext(ctx, () => {
              ctx.translate(ballWidth, 0);

              ctx.strokeStyle = "#1a7098";
              ctx.lineWidth = 2;
              curve(curveWidth, graphHeight, ts);

              ctx.beginPath();
              ctx.arc(pointPos.x, pointPos.y, 5, 0, 2 * Math.PI);
              ctx.fillStyle = "#E53935";
              ctx.fill();
            });
          });
        },
      };
    },
    [position, duration, yMax, yMin, equilibrium]
  );

  return (
    <PlayCanvas
      init={init}
      loop={loop}
      {...{
        restartOnChange,
        autoStart,
        autoStartDelay,
        previewTime,
        ratio,
        restartOnChangeDebounce,
      }}
    />
  );
};
