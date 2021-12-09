import Link from "next/link";

interface Props {
  children?: React.ReactNode;
  token?: null | "type" | "export";
  id: string;
}

export function ApiSectionTitle({
  children,
  token = null,
  id,
}: Props): JSX.Element {
  return (
    <h2 id={id}>
      <Link href={"#" + id}>
        <a className="ApiSectionTitle">{children}</a>
      </Link>
      {token && (
        <span
          className="Token"
          style={{ background: token === "export" ? "#E53935" : "#1976D2" }}
        >
          {token === "export" ? "export" : "type"}
        </span>
      )}
    </h2>
  );
}
