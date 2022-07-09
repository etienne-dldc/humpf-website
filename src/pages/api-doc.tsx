import { MainLayout } from "../components/MainLayout";
import { CodeBlock } from "../components/CodeBlock";
import { ApiSectionTitle } from "../components/ApiSectionTitle";
import Link from "next/link";
import { Presets } from "../canvas/Presets";
import { Decay } from "../canvas/Decay";
import { DecayAngularFreq } from "../canvas/DecayAngularFreq";
import { Exports } from "../components/Exports";
import { API_ANCHORS } from "../utils/contants";
import { SpringValueDemo } from "../canvas/SpringValueDemo";
import Head from "next/head";
import { Fragment } from "react";

type SectionLinkProps = {
  to: keyof typeof API_ANCHORS;
  code?: boolean;
};

function SectionLink({ to, code = true }: SectionLinkProps): JSX.Element {
  const link = (
    <Link href={"#" + to}>
      <a>{API_ANCHORS[to]}</a>
    </Link>
  );

  if (code === false) {
    return link;
  }

  return <code>{link}</code>;
}

type SectionProps = {
  title: keyof typeof API_ANCHORS;
  token?: null | "type" | "export";
  children: React.ReactNode;
};

function Section({ title, token, children }: SectionProps): JSX.Element {
  return (
    <section>
      <ApiSectionTitle id={title} token={token}>
        {API_ANCHORS[title]}
      </ApiSectionTitle>
      {children}
    </section>
  );
}

export default function Api(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Humpf - API</title>
      </Head>
      <MainLayout currentPage="api" key="main">
        <Section title="installation">
          <CodeBlock
            language="bash"
            code={`
          npm install humpf
          # here is the copy/paste for yarn
          yarn add humpf
        `}
          />
        </Section>
        <Section title="imports">
          <p>
            <em>Humpf</em> has three main exports as well as a few types for TypeScript users:
            <br />
            (you can click on each to scroll to corresponding section)
          </p>
          <Exports />
        </Section>
        <Section title="spring" token="export">
          <blockquote>Create a spring function using an optional config.</blockquote>
          <CodeBlock
            code={`
          const spring = Spring();
        `}
          />
          <p>
            This function returns a <SectionLink to="spring-fn" /> function.
          </p>
          <p>
            The <code>Spring</code> function accept an optional <code>config</code> parameter.
          </p>
          <CodeBlock
            code={`
          const spring = Spring({ equilibrium: 200 });
        `}
          />
          <p>
            This <code>config</code> object must be of type <SectionLink to="spring-config-type" /> (all properties are optional).
          </p>
        </Section>
        <Section title="spring-config-type" token="type">
          <blockquote>
            The <code>SpringConfig</code> type is used to create a <SectionLink to="spring" />
          </blockquote>
          <p className="Note">
            The <code>SpringConfig</code> export is also a value (see below).
          </p>
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
                timeStart: 0,
                // precision let you specify how to round values
                // value are rounded to be able to check if velocity === 0 for example
                positionPrecision: 0.00006103515625; // 1 / (1 << 14)
                velocityPrecision: 0.00006103515625; // 1 / (1 << 14)
                dampingRatioPrecision: 0.00006103515625; // 1 / (1 << 14)
              };
            `}
          />
          <p className="Note">
            To better understand the different options of the spring and how to use them take a look a the{" "}
            <Link href="/article">
              <a>Article</a>
            </Link>
            .
          </p>
        </Section>
        <Section title="spring-config" token="export">
          <blockquote>
            The SpringConfig namespace contains a few helper function to create and minipulate <SectionLink to="spring-config-type" />{" "}
            object.
          </blockquote>
          <p className="Note">
            The <code>SpringConfig</code> export is also a type, see above for the definition of that type.
          </p>
          <CodeBlock
            code={`
              export const SpringConfig = {
                defaults,
                // presets
                basic,
                gentle,
                wobbly,
                stiff,
                slow,
                // special
                decay,
                stable,
                // utils
                findEquilibrium,
                angularFrequencyFromMass,
                angularFrequencyFromSpringConstant,
              };
            `}
          />
          <h3>presets</h3>
          <p>
            Preset functions let you create pre defined <SectionLink to="spring-config-type" /> object.
          </p>
          <Presets />
          <p>
            You can also pass a <code>SpringConfig</code> object to any preset function to override any property.
          </p>
          <CodeBlock
            code={`
              const spring = Spring(SpringConfig.basic({ equilibrium: 200 }));
            `}
          />
          <h3>decay</h3>
          <p>
            Decay take a <SectionLink to="spring-config-type" /> and returns a new <SectionLink to="spring-config-type" /> where the{" "}
            <code>equilibrium</code> is proportional to the <code>velocity</code> and the <code>dampingRatio</code> is <code>1</code>
          </p>
          <p className="Note">
            You can use this to animate the end of a &quot;drag&quot; motion, once the user lift its finger but the object has some velocity
            left.
          </p>
          <Decay />
          <p>
            You can adjust the &quot;force&quot; of the decay by changing the <code>angularFrequency</code>
          </p>
          <DecayAngularFreq />
          <h3>stable</h3>
          <p>
            The <code>SpringConfig.stable</code> function produce a spring that does not move.
          </p>
          <CodeBlock
            code={`
              const spring = Spring(SpringConfig.stable(200));

              spring(time); // { pos: 200, vel: 0 }
            `}
          />
          <p>
            To achieve this, the <code>equilibrium</code> and the <code>position</code> are set to the same value and the initial{" "}
            <code>velocity</code> is set to <code>0</code>
          </p>
          <CodeBlock
            code={`
              const spring = Spring({ equilibrium: 200, position: 200, velocity: 0 });

              spring(time); // { pos: 200, vel: 0 }
            `}
          />
          <h3>findEquilibrium</h3>
          <p>
            Take a <code>velocity</code> and an optional <code>angularFrequency</code> and return the decay <code>equilibrium</code> of a
            critically damped spring (<code>dampingRatio = 1</code>).
          </p>
          <CodeBlock
            code={`
          const equilibrium = SpringConfig.findEquilibrium(50, 2);
        `}
          />
          <h3>angularFrequencyFromMass</h3>
          <p>
            Take a <code>mass</code> and an optional <code>springContant</code> and return the corresponding <code>angularFrequency</code>.
          </p>
          <CodeBlock
            code={`
              const angularFrequency = SpringConfig.angularFrequencyFromMass(100, 1);
            `}
          />
          <h3>angularFrequencyFromSpringConstant</h3>
          <p>
            Take a <code>springContant</code> and an optional <code>mass</code> and return the corresponding <code>angularFrequency</code>.
          </p>
          <CodeBlock
            code={`
              const angularFrequency = SpringConfig.angularFrequencyFromMass(1, 100);
            `}
          />
        </Section>
        <Section title="spring-fn" token="type">
          <blockquote>
            The <code>SpringFn</code> type is the function returned by the <SectionLink to="spring" /> function.
          </blockquote>
          <CodeBlock
            code={`
              const spring = Spring();
              //    ^^^^^^ this has a type SpringFn
            `}
          />
          <p>
            This function take only one parameter: the time (as a number) and return a <SectionLink to="spring-result" /> object.
          </p>
          <CodeBlock
            code={`
              type SpringFn = (t: number) => SpringResult;
            `}
          />
          <CodeBlock
            code={`
              const spring = Spring();
              const time = 1000;
              spring(time); // { position: 0.986, velocity: 0.011 }
            `}
          />
          <p>
            The <code>SpringFn</code> type also has two functions to get the <code>position</code> and <code>velocity</code> only.
          </p>
          <CodeBlock
            code={`
              const spring = Spring();
              const time = 1000;
              spring.position(time); // 0.986
              spring.velocity(time); // 0.011
            `}
          />
        </Section>
        <Section title="spring-result" token="type">
          <blockquote>
            This object is the result of calling a <SectionLink to="spring-fn" />
          </blockquote>
          <p>
            This object contains two property <code>position</code> and <code>velocity</code>, corresponding to the position and velocity of
            the spring motion.
          </p>
          <CodeBlock
            code={`
              interface SpringResult {
                position: number;
                velocity: number;
              }
            `}
          />
          <p>Here is a small example combining everything above:</p>
          <CodeBlock
            code={`
              import { Spring, SpringConfig } from "humpf";

              const spring = Spring(SpringConfig.basic({ position: 0, equilibrium: 100 }));

              spring(0); // { position: 0, velocity: 0 }
              spring(200); // { position: 59, velocity: 27 }
              spring(400); // { position: 90, velocity: 7 }
              spring(600); // { position: 98, velocity: 1 }
              spring(800); // { position: 100, velocity: 0 }
            `}
          />
        </Section>
        <Section title="spring-sequence" token="export">
          <blockquote>
            The <code>SpringSequence</code> is a higher order class that let you manipulate a sequence of <SectionLink to="spring" /> over
            time.
          </blockquote>
          <p className="Note">Documentation comming soon.</p>
        </Section>
        <Section title="spring-sequence-type" token="type">
          <blockquote>
            Since <code>SpringSequence</code> is a class, you can use <code>SpringSequence</code> as a type.
          </blockquote>
          <CodeBlock
            code={`
              const seq: SpringSequence = SpringSequence.create();
            `}
          />
        </Section>
      </MainLayout>
    </Fragment>
  );
}
