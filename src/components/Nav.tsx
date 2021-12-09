import Link from "next/link";
import { useWindowSize } from "../hooks/useWindowSize";
import { GithubIcon } from "./GithubIcon";
import { AwardIcon } from "./AwardIcon";
import clsx from "clsx";

interface Props {
  currentPage: "home" | "api" | "article";
}

export function Nav({ currentPage }: Props): JSX.Element {
  const size = useWindowSize();

  const showIconsVersion = size.width < 500;

  return (
    <nav className="Nav">
      <div className="Nav--links">
        <Link href="/">
          <a
            className={clsx(
              "Nav--link",
              currentPage === "home" && "Nav--active"
            )}
          >
            Humpf
          </a>
        </Link>
        <Link href="/article">
          <a
            className={clsx(
              "Nav--link",
              currentPage === "article" && "Nav--active"
            )}
          >
            Article
          </a>
        </Link>
        <Link href="/api-doc">
          <a
            className={clsx(
              "Nav--link",
              currentPage === "api" && "Nav--active"
            )}
          >
            API
          </a>
        </Link>
        <a className="Nav--link" href="https://github.com/etienne-dldc/humpf">
          {showIconsVersion ? <GithubIcon size={20} /> : "Github"}
        </a>
        <a
          className="Nav--link"
          href="https://github.com/sponsors/etienne-dldc"
        >
          {showIconsVersion ? <AwardIcon size={20} /> : "Sponsor"}
        </a>
      </div>
      <div className="Nav--hr" />
    </nav>
  );
}
