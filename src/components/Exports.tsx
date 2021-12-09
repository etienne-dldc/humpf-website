import Link from "next/link";
import { API_ANCHORS } from "../utils/contants";

type Props = {
  children: React.ReactNode;
  to: keyof typeof API_ANCHORS;
};

function SectionLink({ to, children }: Props): JSX.Element {
  const link = (
    <Link href={"#" + to}>
      <a>{children || API_ANCHORS[to]}</a>
    </Link>
  );

  return link;
}

export const Exports = () => {
  return (
    <pre
      className="prism-code language-tsx CodeBlock"
      style={{
        color: "rgb(214, 222, 235)",
        backgroundColor: "rgb(1, 22, 39)",
      }}
    >
      <div className="token-line" style={{ color: "rgb(214, 222, 235)" }}>
        <span className="token keyword" style={{ color: "rgb(127, 219, 202)" }}>
          import
        </span>
        <span className="token plain"> </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          {"{"}
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring">Spring</SectionLink>
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ,
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring-config">SpringConfig</SectionLink>
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ,
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring-value">SpringValue</SectionLink>
        </span>
        <span className="token plain"> </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          {"}"}
        </span>
        <span className="token plain"> </span>
        <span className="token keyword" style={{ color: "rgb(127, 219, 202)" }}>
          from
        </span>
        <span className="token plain"> </span>
        <span className="token string" style={{ color: "rgb(173, 219, 103)" }}>
          &apos;humpf&apos;
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ;
        </span>
        <span className="token plain" />
      </div>
      <div className="token-line" style={{ color: "rgb(214, 222, 235)" }}>
        <span className="token plain" style={{ display: "inline-block" }} />
      </div>
      <div className="token-line" style={{ color: "rgb(214, 222, 235)" }}>
        <span className="token plain" />
        <span
          className="token comment"
          style={{ color: "rgb(99, 119, 119)", fontStyle: "italic" }}
        >
          {"// Types exports (for TypeScript users only)"}
        </span>
        <span className="token plain" />
      </div>
      <div className="token-line" style={{ color: "rgb(214, 222, 235)" }}>
        <span className="token plain" />
        <span className="token keyword" style={{ color: "rgb(127, 219, 202)" }}>
          import
        </span>
        <span className="token plain"> </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          {"{"}
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring-value-options">
            SpringValueOptions
          </SectionLink>
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ,
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring-fn">SpringFn</SectionLink>
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ,
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring-result">SpringResult</SectionLink>
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ,
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring-config-type">SpringConfig</SectionLink>
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ,
        </span>
        <span className="token plain"> </span>
        <span className="token maybe-class-name">
          <SectionLink to="spring-config-type">SpringValue</SectionLink>
        </span>
        <span className="token plain"> </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          {"}"}
        </span>
        <span className="token plain"> </span>
        <span className="token keyword" style={{ color: "rgb(127, 219, 202)" }}>
          from
        </span>
        <span className="token plain"> </span>
        <span className="token string" style={{ color: "rgb(173, 219, 103)" }}>
          &apos;humpf&apos;
        </span>
        <span
          className="token punctuation"
          style={{ color: "rgb(199, 146, 234)" }}
        >
          ;
        </span>
      </div>
    </pre>
  );
};
