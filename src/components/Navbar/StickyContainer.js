"use client"
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 16px;
  background-color: var(--color-page-accent);
`

function StickyContainer({ children }) {
  const [isSticking, setIsSticking] = React.useState(false);

  const containerRef = React.useRef(null);
  const options = {
    root: null,
    rootMargin: '50px 0px 0px 0px',
    threshold: 1.0,
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsSticking(!entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <>
      <div data-scroll-watcher='' ref={containerRef}></div>
      <StyledContainer className={isSticking && 'sticking'}>{children}</StyledContainer>
    </>
  )
}

export default StickyContainer;