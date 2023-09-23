'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

interface ClassNameProps {
  className?: String;
}

const StyledContainer = styled.div<ClassNameProps>`
  position: sticky;
  top: 0;
  padding: 16px;
  background-color: var(--color-page-accent);

  &.sticking {
    border-bottom: var(--color-page-background) 1px solid;
    box-shadow: var(--color-page-background) 0px -3px 15px 1px;
  }
`;

function StickyContainer({ children }: Props) {
  const [isSticking, setIsSticking] = React.useState(false);

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px 0px 0px 0px',
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

  const sticking = isSticking ? 'sticking' : '';

  return (
    <>
      <div
        data-scroll-watcher=''
        ref={containerRef}
      ></div>
      <StyledContainer className={sticking}>{children}</StyledContainer>
    </>
  );
}

export default StickyContainer;
