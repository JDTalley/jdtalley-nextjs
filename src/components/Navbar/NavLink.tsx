'use client';
import styled from 'styled-components';

const NavLink = styled.span`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    letter-spacing: 0.075rem;
  }

  &:hover {
    color: var(--color-primary);
  }
`;

export default NavLink;
