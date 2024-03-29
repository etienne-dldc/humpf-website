import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

interface Props {
  language?: Language;
  code: string;
}

export function CodeBlock({ code, language = "tsx" }: Props): JSX.Element {
  const cleanCode = cleanupCode(code);

  return (
    <Highlight
      {...defaultProps}
      code={cleanCode}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className + " CodeBlock"} style={style}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

const tabsAtStart = /^( *)/g;

function cleanupCode(code: string): string {
  const lines = code.split("\n").slice(1, -1);
  let minTab = Infinity;
  lines.forEach((line) => {
    if (line.length === 0) {
      return;
    }
    const tabs = line.match(tabsAtStart);
    if (tabs) {
      minTab = Math.min(minTab, tabs[0].length);
    }
  });
  if (minTab === Infinity) {
    return code;
  }
  return lines.map((line) => line.slice(minTab)).join("\n");
}
