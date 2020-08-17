import React from "react";
import { MainLayout } from "../components/MainLayout";
import { CodeBlock } from "../components/CodeBlock";
import { ApiSectionTitle } from "../components/ApiSectionTitle";
import Link from "next/link";
import { Presets } from "../canvas/Presets";
import { Decay } from "../canvas/Decay";
import { DecayAngularFreq } from "../canvas/DecayAngularFreq";
import { Exports } from "../components/Exports";
import { API_ANCHORS } from "../utils/contants";

const SectionLink: React.FC<{
  to: keyof typeof API_ANCHORS;
  code?: boolean;
}> = ({ to, code = true }) => {
  const link = (
    <Link href={"#" + to}>
      <a>{API_ANCHORS[to]}</a>
    </Link>
  );

  if (code === false) {
    return link;
  }

  return <code>{link}</code>;
};

const SectionTitle: React.FC<{
  title: keyof typeof API_ANCHORS;
  token?: null | "type" | "export";
}> = ({ title, token }) => {
  return (
    <ApiSectionTitle id={title} token={token}>
      {API_ANCHORS[title]}
    </ApiSectionTitle>
  );
};

export default function Api(): JSX.Element {
  return (
    <MainLayout currentPage="api" key="main">
      <SectionTitle title="installation" />
      <CodeBlock
        language="bash"
        code={`
          npm install humpf
          # here is the copy/paste for yarn
          yarn add humpf
        `}
      />
      <SectionTitle title="imports" />
      <p>
        <em>Humpf</em> has three main exports as well as four types for
        TypeScript users:
        <br />
        (you can click on each to scroll to corresponding section)
      </p>
      {/* <CodeBlock
        code={`
          import { Spring, SpringConfig, SpringValue } from 'humpf';

          // This is for TypeScript users only
          import { SpringValueOptions, SpringFn, SpringResult, SpringConfig } from 'humpf';
        `}
      /> */}
      <Exports />
      <SectionTitle title="spring" token="export" />
      <blockquote>
        Create a spring function using an optional config.
      </blockquote>
      <CodeBlock
        code={`
          const spring = Spring();
        `}
      />
      <p>
        This function returns a <SectionLink to="spring-fn" /> function.
      </p>
      <p>
        The <code>Spring</code> function accept an optional <code>config</code>{" "}
        parameter.
      </p>
      <CodeBlock
        code={`
          const spring = Spring({ equilibrium: 200 });
        `}
      />
      <p>
        This <code>config</code> object must be of type{" "}
        <SectionLink to="spring-config-type" /> (all th properties are
        optional).
      </p>
      <SectionTitle title="spring-config" token="export" />
      <blockquote>
        The SpringConfig namespace contains a few helper function to create and
        minipulate <SectionLink to="spring-config-type" /> object.
      </blockquote>
      <p className="Note">
        The <code>SpringConfig</code> export is also a type, see below for the
        definition of that type.
      </p>
      <CodeBlock
        code={`
        export const SpringConfig = {
          // presets
          basic,
          gentle,
          wobbly,
          stiff,
          slow,
          // special presets
          decay,
          static,
          // utils
          findEquilibrium,
          angularFrequencyFromMass,
          angularFrequencyFromSpringConstant
        };
      `}
      />
      <h3>Presets</h3>
      <p>
        Preset functions let you create pre defined{" "}
        <SectionLink to="spring-config-type" /> object.
      </p>
      <Presets />
      <h3>Decay</h3>
      <p>
        Decay take a <SectionLink to="spring-config-type" /> and returns a new{" "}
        <SectionLink to="spring-config-type" /> where the{" "}
        <code>equilibrium</code> is proportional to the <code>velocity</code>{" "}
        and the <code>dampingRatio</code> is <code>1</code>
      </p>
      <Decay />
      <p>
        You can adjust the "force" of the decay by changing the{" "}
        <code>angularFrequency</code>
      </p>
      <DecayAngularFreq />
      <h3>Static</h3>
      <p>
        The <code>SpringConfig.static</code> function produce a spring that does
        not move.
      </p>
      <CodeBlock
        code={`
          const spring = Spring(SpringConfig.static(200));

          spring(time); // { pos: 200, vel: 0 }
        `}
      />
      <h3>findEquilibrium</h3>
      <p>
        Take a <code>velocity</code> and an optional{" "}
        <code>angularFrequency</code> and return the decay{" "}
        <code>equilibrium</code>.
      </p>
      <CodeBlock
        code={`
          const equilibrium = SpringConfig.findEquilibrium(50, 2);
        `}
      />
      <h3>angularFrequencyFromMass</h3>
      <p>
        Take a <code>mass</code> and an optional <code>springContant</code> and
        return the corresponding <code>angularFrequency</code>.
      </p>
      <CodeBlock
        code={`
          const angularFrequency = SpringConfig.angularFrequencyFromMass(100, 1);
        `}
      />
      <h3>angularFrequencyFromSpringConstant</h3>
      <p>
        Take a <code>springContant</code> and an optional <code>mass</code> and
        return the corresponding <code>angularFrequency</code>.
      </p>
      <CodeBlock
        code={`
          const angularFrequency = SpringConfig.angularFrequencyFromMass(1, 100);
        `}
      />
      <SectionTitle title="spring-config-type" token="type" />
      <blockquote>
        The <code>SpringConfig</code> type is used to create a{" "}
        <SectionLink to="spring" />
      </blockquote>
      <p>Here are all its properties as well as the default values.</p>
      <CodeBlock
        code={`
          const DEFAULT_CONFIG: SpringConfig = {
            // initial position
            position: 0,
            // initial velocity
            velocity: 0,
            // position to approach
            equilibrium: 100,
            // angular frequency of motion
            angularFrequency: 1,
            // damping ratio of motion
            dampingRatio: 1,
            // [advanced] multiply time by this value
            timeScale: 1 / 100,
            // time at which the animation should start (after timeScale has been applied)
            timeStart: 0
          };
        `}
      />
      <p className="Note">
        To better understand the different options of the spring and how to use
        them take a look a the{" "}
        <Link href="/article">
          <a>Article</a>
        </Link>
        .
      </p>
      <SectionTitle title="spring-fn" token="type" />
      <blockquote>
        The <code>SpringFn</code> type is the function returned by the{" "}
        <SectionLink to="spring" /> function.
      </blockquote>
      <p>
        This function take only one parameter: the time (as a number) and return
        a <SectionLink to="spring-result" /> object.
      </p>
      <CodeBlock
        code={`
          type SpringFn = (t: number) => SpringResult;
        `}
      />
      <SectionTitle title="spring-result" token="type" />
      <blockquote>
        This object is the result of calling a <SectionLink to="spring-fn" />
      </blockquote>
      <p>
        This object contains two property <code>pos</code> and <code>vel</code>,
        corresponding to the position and velocity of the spring motion.
      </p>
      <CodeBlock
        code={`
          interface SpringResult {
            pos: number;
            vel: number;
          }
        `}
      />
      <p>Here is a small example combining everything above:</p>
      <CodeBlock
        code={`
          import { Spring, SpringConfig } from "humpf";

          const spring = Spring(SpringConfig.basic());

          spring(0); // { pos: 0, vel: 0}
          spring(200); // { pos: 59, vel: 27 }
          spring(400); // { pos: 90, vel: 7 }
          spring(600); // { pos: 98, vel: 1 }
          spring(800); // { pos: 100, vel: 0 }
        `}
      />
      <SectionTitle title="spring-value" token="export" />
      <blockquote>
        The <code>SpringValue</code> constructor is a higher level tool to
        manage a spring animated value over time.
      </blockquote>
      <p>
        <code>SpringValue</code> is a function that take two optional
        parameters:
      </p>
      <ul>
        <li>
          A <SectionLink to="spring-config-type" /> object to setup the initial
          spring
        </li>
        <li>
          A option object of type <SectionLink to="spring-value-options" />
        </li>
      </ul>
      <CodeBlock
        code={`
          const value = SpringValue();
        `}
      />
      {/* TODO: Codesandbox link ! */}
      <SectionTitle title="spring-value-options" token="type" />
      <CodeBlock
        code={`
          export interface SpringValueOptions {
            velocityThreshold: number;
            positionThreshold: number;
            onSpringChange: () => void;
            now: () => number;
          }
        `}
      />
    </MainLayout>
  );
}
