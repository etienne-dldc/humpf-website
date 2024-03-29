import { useCallback } from "react";
import { PlayCanvas, InitPlayCanvas } from "../components/PlayCanvas";
import { map } from "../utils";

export function StepByStepMove(): JSX.Element {
  const init = useCallback<InitPlayCanvas>((ctx) => {
    const duration = 2000;

    const acceleration = 0.1;
    let velocity = -4;
    let position = 0;

    return {
      restart: () => {
        velocity = -4;
        position = 0;
      },
      draw: ({ width, height, ts, done, isDone }) => {
        if (!isDone && ts > duration) {
          done();
        }
        // on each frame
        velocity = velocity + acceleration;
        position = position + velocity;

        const ballSize = width * 0.05;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#352730";
        ctx.fillRect(0, 0, width, height);

        const padding = height * 0.1;
        const graphWidth = width - padding * 2;
        const graphHeight = height - padding * 2;

        ctx.save();
        ctx.translate(padding, padding);

        const x = map(-100, 180, 0, graphWidth, position);
        const y = graphHeight / 2;
        ctx.beginPath();
        ctx.arc(x, y, ballSize, 0, 2 * Math.PI);
        ctx.fillStyle = "#E53935";
        ctx.fill();

        ctx.restore();
      },
    };
  }, []);

  return (
    <PlayCanvas
      init={init}
      autoStart={false}
      ratio={4 / 1}
      restartOnChange={false}
      renderWhilePaused={false}
    />
  );
}
