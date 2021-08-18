import TransactionsBody from './transactionsBody/TransactionsBody';
import PropTypes from 'prop-types';
import { TransactionsHistoryStyled } from './TransactionsHistoryStyled';

const TransactionsHistory = ({ transactions }) => {
  return (
    <TransactionsHistoryStyled cellSpacing="0">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionsBody transactions={transactions} />
    </TransactionsHistoryStyled>
  );
};

export default TransactionsHistory;

TransactionsHistory.propTypes = {
  transactions: PropTypes.array,
};
