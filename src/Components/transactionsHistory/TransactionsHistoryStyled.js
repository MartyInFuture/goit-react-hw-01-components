import styled from 'styled-components';

export const TransactionsHistoryStyled = styled.table`
  background-color: white;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e0e5e8;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  thead {
    background-color: #00bcd5;
    color: white;
  }
  th {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 22px;
  }
  th:not(:last-child) {
    border-right: 1px solid white;
  }
`;
