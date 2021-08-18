import { TransactionStyled } from './TransactionStyled';

const Transaction = ({ type, amount, currency }) => {
  return (
    <TransactionStyled>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionStyled>
  );
};

export default Transaction;
