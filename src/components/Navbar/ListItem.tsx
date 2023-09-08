'use client';
import styled from 'styled-components';

const ListItem = styled.li`
  &:not(:first-child) {
    padding-left: 20px;
  }

  @media (max-width: 900px) {
    padding: 12px !important;
  }
`;

export default ListItem;
