import PropTypes from 'prop-types';
import Transaction from './transaction/Transaction';

const TransactionsBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
        />
      ))}
    </tbody>
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
