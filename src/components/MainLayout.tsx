import { Nav } from "./Nav";
import { Logo } from "./Logo";

interface Props {
  children: React.ReactNode;
  currentPage: "home" | "api" | "article";
}

export function MainLayout({ children, currentPage }: Props): JSX.Element {
  return (
    <div className="Container">
      <header className="Header">
        <Logo className="Header--logo" />
        <Nav currentPage={currentPage} />
      </header>
      <main className="Content">{children}</main>
      <footer className="Footer">
        <p>
          Made by <a href="https://dldc.dev/twitter">@EtienneTech</a>
        </p>
      </footer>
    </div>
  );
}
