import { MainLayout } from "../components/MainLayout";
import { BasicSpring } from "../canvas/BasicSpring";
// import { Config } from "../canvas/Config";
import Link from "next/link";
import { CodeBlock } from "../components/CodeBlock";

export default function Home(): JSX.Element {
  return (
    <MainLayout currentPage="home" key="main">
      <p className="Hero">
        A <em>TypeScript</em> and <em>JavaScript</em> library to get the{" "}
        <em>position and velocity</em> of a <em>damped spring</em> as a{" "}
        <em>continuous function of time</em>.
      </p>
      <BasicSpring autoStart={true} loop={true} />
      <div className="HomeActions">
        <Link href="/article">
          <a className="HomeActions--button HomeActions--cta">
            Read the Article
          </a>
        </Link>
        <Link href="/api-doc">
          <a className="HomeActions--button">Explore the API</a>
        </Link>
      </div>
      <h2>Gist</h2>
      <CodeBlock
        code={`
          import { Spring } from "humpf";

          const spring = Spring();
          
          spring(0); // { pos: 0, vel: 0 }
          spring(200); // { pos: 59, vel: 27 }
          spring(400); // { pos: 90, vel: 7 }
          spring(600); // { pos: 98, vel: 1 }
          spring(800); // { pos: 100, vel: 0 }
        `}
      />
      {/* <Config /> */}
    </MainLayout>
  );
}
