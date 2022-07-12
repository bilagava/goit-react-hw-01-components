import PropTypes from 'prop-types';

const TransactionHistoryListItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
TransactionHistoryListItem.protoTypes = {
  type: PropTypes.number,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string,
};
export default TransactionHistoryListItem;
