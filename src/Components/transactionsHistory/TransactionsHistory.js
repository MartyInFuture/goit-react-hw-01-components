import TransactionsBody from './transactions/TransactionsBody';
import PropTypes from 'prop-types';

const TransactionsHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionsBody transactions={transactions} />
    </table>
  );
};

export default TransactionsHistory;

TransactionsHistory.propTypes = {
  transactions: PropTypes.array,
};
