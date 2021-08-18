import PropTypes from 'prop-types';
import Transaction from './transaction/Transaction';
import { TransactionBodyStyled } from './TransactionBodyStyled';

const TransactionsBody = ({ transactions }) => {
  return (
    <TransactionBodyStyled>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
        />
      ))}
    </TransactionBodyStyled>
  );
};

export default TransactionsBody;

TransactionsBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
