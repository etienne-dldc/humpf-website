import React from "react";
import Link from "next/link";

interface Props {
  token?: null | "type" | "export";
  id: string;
}

export const ApiSectionTitle: React.FC<Props> = ({
  children,
  token = null,
  id,
}) => {
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
};
