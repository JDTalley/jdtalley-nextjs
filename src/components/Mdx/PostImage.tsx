import React from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import styles from "./mdx.module.css";

function PostImage(props: ImageProps) {
  return (
    <div>
      <Link
        href={props.src.toString()}
        target="_blank"
        className={styles.imageLink}
      >
        <Image {...props} alt={props.alt} className={styles.image} />
      </Link>
    </div>
  );
}

export default PostImage;
