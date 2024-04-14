"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styles from "./navbar.module.css";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [isSticking, setIsSticking] = React.useState(false);

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "50px 0px 0px 0px",
      threshold: 1.0,
    };

    const currentRef = containerRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsSticking(!entry.isIntersecting);
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (containerRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef]);

  const sticking = isSticking ? `${styles.sticking}` : "";

  return (
    <>
      <div data-scroll-watcher="" ref={containerRef}></div>
      <div className={`${styles.sticky} ${sticking} ${styles.container}`}>
        <NavigationMenu.Root className={styles.NavigationMenuRoot}>
          <NavigationMenu.List className={`${styles.NavigationMenuList}`}>
            <NavigationMenu.Item>
              <Link href="/" passHref legacyBehavior>
                <NavigationMenu.Link className={styles.NavigationMenuLink}>
                  JDTalley
                </NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </>
  );
}
