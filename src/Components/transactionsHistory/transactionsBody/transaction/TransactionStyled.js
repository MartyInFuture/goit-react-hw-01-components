import styled from 'styled-components';

export const TransactionStyled = styled.tr`
  color: #797d80;

  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
  td {
    padding-bottom: 4px;
    padding-top: 4px;
  }
  td:not(:last-child) {
    border-right: 1px solid #e0e5e8;
  }
`;
