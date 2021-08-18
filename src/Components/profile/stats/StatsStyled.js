import styled from 'styled-components';

export const StatsStyled = styled.ul`
  display: flex;
  text-align: center;
  background-color: #f3f6f9;

  .item {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    border: 1px solid #e7ecf2;
  }
  .label {
    padding-bottom: 5px;
  }
  .quantity {
    font-weight: 900;
  }
`;
