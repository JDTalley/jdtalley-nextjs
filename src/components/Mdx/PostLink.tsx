import React from "react";
import Link from "next/link";
import styles from "./mdx.module.css";

function PostLink({ href, children }: React.JSX.IntrinsicElements["a"]) {
  if (!href) return;

  if (href && href.startsWith("/")) {
    return (
      <Link className={styles.link} href={href.toString()}>
        {children}
      </Link>
    );
  }

  return (
    <Link className={styles.link} href={href.toString()} target="_blank">
      {children}
    </Link>
  );
}

export default PostLink;
